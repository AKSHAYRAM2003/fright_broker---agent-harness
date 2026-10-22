import re
import json
import os
from bs4 import BeautifulSoup, Comment, NavigableString, Tag

ATTR_MAP = {
    'class': 'className',
    'for': 'htmlFor',
    'tabindex': 'tabIndex',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'autoplay': 'autoPlay',
    'playsinline': 'playsInline',
    'crossorigin': 'crossOrigin',
    'novalidate': 'noValidate',
    'viewbox': 'viewBox',
    'srcset': 'srcSet',
    'fetchpriority': 'fetchPriority',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'aria-haspopup': 'aria-haspopup',
    'aria-expanded': 'aria-expanded',
    'aria-label': 'aria-label',
    'aria-hidden': 'aria-hidden',
    'aria-current': 'aria-current',
    'data-nimg': 'data-nimg',
    'data-mode': 'data-mode',
    'data-theme': 'data-theme',
}

SELF_CLOSING = {'img', 'input', 'source', 'br', 'hr', 'meta', 'link'}

def clean_style_str(style_str):
    # Remove SSR animation hiding
    cleaned = style_str.replace('opacity:0;transform:translateY(16px)', '')
    cleaned = cleaned.replace('opacity: 0; transform: translateY(16px)', '')
    cleaned = cleaned.replace('opacity:0', '')
    cleaned = cleaned.replace('opacity: 0;', '')
    return cleaned.strip(' ;')

def style_to_jsx(style_str):
    style_str = clean_style_str(style_str)
    if not style_str:
        return None

    pairs = []
    parts = re.split(r';(?![^\(]*\))', style_str)
    for p in parts:
        if not p.strip() or ':' not in p:
            continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip()
        if not k or not v:
            continue
        if k.startswith('--'):
            prop = json.dumps(k)
        else:
            camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            prop = json.dumps(camel)
        pairs.append(f"{prop}: {json.dumps(v)}")
    
    if not pairs:
        return None
    return '{' + ', '.join(pairs) + '}'

def node_to_jsx(node, depth=0):
    if isinstance(node, Comment):
        return ""
    if isinstance(node, NavigableString):
        text = str(node)
        text = text.replace('{', '&#123;').replace('}', '&#125;')
        return text

    if not isinstance(node, Tag):
        return ""

    tag_name = node.name

    attrs_list = []
    for k, v in node.attrs.items():
        if isinstance(v, list):
            v_str = ' '.join(v)
        else:
            v_str = str(v)

        if k in ('src', 'srcset', 'href'):
            v_str = v_str.replace('./images/', '/images/')
            v_str = v_str.replace('./fonts/', '/fonts/')
            if 'landing-platform-diagram.svg' in v_str:
                v_str = '/images/cdn/landing-platform-diagram.svg'
            if 'HR_Landing_Hero_Loop_HD169_Lumen_v1.mp4' in v_str:
                v_str = '/videos/HR_Landing_Hero_Loop_HD169_Lumen_v1.mp4'
            if 'ESI_Launch.mp4' in v_str:
                v_str = '/videos/ESI_Launch.mp4'

        jsx_key = ATTR_MAP.get(k.lower(), k)

        if k == 'style':
            # Special case: keep span opacity for statement illumination
            if tag_name == 'span' and 'opacity:0.18' in v_str:
                jsx_val = '({ "opacity": "0.25" } as React.CSSProperties)'
                attrs_list.append(f"style={{{jsx_val}}}")
            else:
                jsx_obj = style_to_jsx(v_str)
                if jsx_obj:
                    jsx_val = f"({jsx_obj} as React.CSSProperties)"
                    attrs_list.append(f"style={{{jsx_val}}}")
        elif k == 'value' and tag_name == 'input':
            attrs_list.append(f'defaultValue={json.dumps(v_str)}')
        elif isinstance(v, bool):
            if v:
                attrs_list.append(jsx_key)
        elif jsx_key in ('tabIndex',):
            try:
                attrs_list.append(f"{jsx_key}={{{int(v_str)}}}")
            except ValueError:
                attrs_list.append(f"{jsx_key}={json.dumps(v_str)}")
        elif jsx_key in ('autoPlay', 'playsInline', 'noValidate', 'required', 'loop', 'muted'):
            attrs_list.append(jsx_key)
        elif tag_name == 'path' and k == 'fill' and 'hr-wordmark' in v_str:
            attrs_list.append('fill="var(--hr-wordmark, #070707)"')
        else:
            attrs_list.append(f"{jsx_key}={json.dumps(v_str)}")

    # Add autoPlay to hero video
    if tag_name == 'video':
        if 'autoPlay' not in attrs_list:
            attrs_list.append('autoPlay')

    attrs_str = " " + " ".join(attrs_list) if attrs_list else ""

    children = list(node.children)
    if tag_name in SELF_CLOSING and not children:
        return f"<{tag_name}{attrs_str} />"
    elif not children:
        return f"<{tag_name}{attrs_str}></{tag_name}>"
    else:
        children_jsx = "".join(node_to_jsx(c, depth + 1) for c in children)
        return f"<{tag_name}{attrs_str}>{children_jsx}</{tag_name}>"

def convert_element_to_component(el, component_name):
    jsx_content = node_to_jsx(el)
    
    code = f'''"use client";

import React from "react";

export const {component_name}: React.FC = () => {{
  return (
    <>
      {jsx_content}
    </>
  );
}};
'''
    return code

def main_process():
    with open('/Users/akshayram/Desktop/rea/happyrobot-web/original.html') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    landing = soup.find(class_='hr-landing')
    main = landing.find('main')
    sections = main.find_all(recursive=False)

    comp_dir = '/Users/akshayram/Desktop/rea/happyrobot-next/src/components'

    mapping = [
        (0, 'Hero'),
        (1, 'LogoWall'),
        (2, 'StatementSection'),
        (3, 'CaseStudies'),
        (4, 'PlatformDiagram'),
        (5, 'VerticalsSection'),
        (6, 'SuperintelligenceSection'),
        (7, 'PlatformDeepDive'),
        (8, 'CareersSection'),
        (9, 'CtaSection'),
    ]

    for idx, comp_name in mapping:
        sec = sections[idx]
        
        # Ensure proper IDs for anchor navigation / interactive features
        if comp_name == 'StatementSection':
            sec['id'] = 'statement-section'
            h2 = sec.find('h2')
            if h2:
                h2['id'] = 'statement-heading'
        elif comp_name == 'CaseStudies':
            sec['id'] = 'case-studies'
        elif comp_name == 'PlatformDiagram':
            sec['id'] = 'platform-diagram'
        elif comp_name == 'VerticalsSection':
            sec['id'] = 'verticals'
        elif comp_name == 'CareersSection':
            sec['id'] = 'careers'

        file_path = os.path.join(comp_dir, f"{comp_name}.tsx")
        code = convert_element_to_component(sec, comp_name)
        with open(file_path, 'w') as out_f:
            out_f.write(code)
        print(f"Generated {comp_name}.tsx (size: {len(code)} bytes)")

    # Footer
    footer = landing.find('footer')
    if footer:
        footer_path = os.path.join(comp_dir, "Footer.tsx")
        footer_code = convert_element_to_component(footer, "Footer")
        with open(footer_path, 'w') as out_f:
            out_f.write(footer_code)
        print(f"Generated Footer.tsx (size: {len(footer_code)} bytes)")

if __name__ == '__main__':
    main_process()
