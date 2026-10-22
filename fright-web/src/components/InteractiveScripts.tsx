"use client";

import React, { useEffect } from "react";

export const InteractiveScripts: React.FC = () => {
  useEffect(() => {
    // ==========================================
    // 1. SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll(".hr-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hr-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        setTimeout(() => {
          el.classList.add("hr-visible");
        }, Math.min(index * 40, 500));
      } else {
        revealObserver.observe(el);
      }
    });

    // ==========================================
    // 2. DESKTOP MEGA MENU (PLATFORM & SOLUTIONS)
    // ==========================================
    const btnPlatform = document.getElementById("nav-btn-platform");
    const btnSolutions = document.getElementById("nav-btn-solutions");
    const megaMenu = document.getElementById("desktop-mega-menu");
    const panelPlatform = document.getElementById("panel-platform");
    const panelSolutions = document.getElementById("panel-solutions");

    let activeMenu: string | null = null;
    let menuTimer: NodeJS.Timeout | null = null;

    function openMegaPanel(panelName: string) {
      if (menuTimer) clearTimeout(menuTimer);
      if (!megaMenu) return;

      megaMenu.classList.add("menu-open");
      megaMenu.style.maxHeight = "600px";
      megaMenu.style.opacity = "1";
      megaMenu.style.pointerEvents = "auto";
      activeMenu = panelName;

      if (panelName === "platform") {
        if (btnPlatform) btnPlatform.setAttribute("aria-expanded", "true");
        if (btnSolutions) btnSolutions.setAttribute("aria-expanded", "false");

        if (panelPlatform) {
          panelPlatform.classList.remove("hidden", "pointer-events-none", "opacity-0");
          panelPlatform.classList.add("opacity-100", "pointer-events-auto");
        }
        if (panelSolutions) {
          panelSolutions.classList.add("hidden", "pointer-events-none", "opacity-0");
          panelSolutions.classList.remove("opacity-100", "pointer-events-auto");
        }
      } else if (panelName === "solutions") {
        if (btnSolutions) btnSolutions.setAttribute("aria-expanded", "true");
        if (btnPlatform) btnPlatform.setAttribute("aria-expanded", "false");

        if (panelSolutions) {
          panelSolutions.classList.remove("hidden", "pointer-events-none", "opacity-0");
          panelSolutions.classList.add("opacity-100", "pointer-events-auto");
        }
        if (panelPlatform) {
          panelPlatform.classList.add("hidden", "pointer-events-none", "opacity-0");
          panelPlatform.classList.remove("opacity-100", "pointer-events-auto");
        }
      }
    }

    function closeMegaMenu() {
      if (menuTimer) clearTimeout(menuTimer);
      if (!megaMenu) return;

      megaMenu.classList.remove("menu-open");
      megaMenu.style.maxHeight = "0";
      megaMenu.style.opacity = "0";
      megaMenu.style.pointerEvents = "none";

      if (btnPlatform) btnPlatform.setAttribute("aria-expanded", "false");
      if (btnSolutions) btnSolutions.setAttribute("aria-expanded", "false");

      if (panelPlatform) {
        panelPlatform.classList.add("pointer-events-none", "opacity-0");
        panelPlatform.classList.remove("opacity-100", "pointer-events-auto");
      }
      if (panelSolutions) {
        panelSolutions.classList.add("pointer-events-none", "opacity-0");
        panelSolutions.classList.remove("opacity-100", "pointer-events-auto");
      }
      activeMenu = null;
    }

    function scheduleClose() {
      menuTimer = setTimeout(() => {
        closeMegaMenu();
      }, 220);
    }

    if (btnPlatform) {
      btnPlatform.addEventListener("mouseenter", () => openMegaPanel("platform"));
      btnPlatform.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        activeMenu === "platform" ? closeMegaMenu() : openMegaPanel("platform");
      });
    }

    if (btnSolutions) {
      btnSolutions.addEventListener("mouseenter", () => openMegaPanel("solutions"));
      btnSolutions.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        activeMenu === "solutions" ? closeMegaMenu() : openMegaPanel("solutions");
      });
    }

    if (megaMenu) {
      megaMenu.addEventListener("mouseenter", () => {
        if (menuTimer) clearTimeout(menuTimer);
      });
      megaMenu.addEventListener("mouseleave", scheduleClose);
    }

    const navContainer = document.querySelector("nav");
    if (navContainer) {
      navContainer.addEventListener("mouseleave", scheduleClose);
    }

    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest("nav") && !target?.closest("#desktop-mega-menu")) {
        closeMegaMenu();
      }
    };
    document.addEventListener("click", handleDocClick);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMegaMenu();
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    document.querySelectorAll("#desktop-mega-menu a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        closeMegaMenu();
        if (href && href.startsWith("/")) {
          if (href.includes("platform")) {
            e.preventDefault();
            document.getElementById("platform-diagram")?.scrollIntoView({ behavior: "smooth" });
          } else if (href.includes("solutions") || href.includes("industries")) {
            e.preventDefault();
            document.getElementById("verticals")?.scrollIntoView({ behavior: "smooth" });
          } else if (href.includes("customers")) {
            e.preventDefault();
            document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // ==========================================
    // 3. MOBILE HAMBURGER MENU & ACCORDIONS
    // ==========================================
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileAccBtnPlatform = document.getElementById("mobile-acc-btn-platform");
    const mobileAccBtnSolutions = document.getElementById("mobile-acc-btn-solutions");

    if (mobileMenuBtn && mobileDrawer) {
      let isMobileOpen = false;

      mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        isMobileOpen = !isMobileOpen;
        mobileMenuBtn.classList.toggle("is-active", isMobileOpen);
        mobileMenuBtn.setAttribute("aria-expanded", isMobileOpen ? "true" : "false");

        if (isMobileOpen) {
          mobileDrawer.classList.remove("grid-rows-[0fr]", "opacity-0", "pointer-events-none");
          mobileDrawer.classList.add("grid-rows-[1fr]", "opacity-100", "pointer-events-auto");
        } else {
          mobileDrawer.classList.remove("grid-rows-[1fr]", "opacity-100", "pointer-events-auto");
          mobileDrawer.classList.add("grid-rows-[0fr]", "opacity-0", "pointer-events-none");
        }
      });

      function setupAccordion(button: HTMLElement | null) {
        if (!button) return;
        const content = button.nextElementSibling as HTMLElement | null;
        const svg = button.querySelector("svg");
        let isOpen = false;

        button.addEventListener("click", (e) => {
          e.preventDefault();
          isOpen = !isOpen;
          button.setAttribute("aria-expanded", isOpen ? "true" : "false");
          if (svg) svg.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";

          if (content) {
            if (isOpen) {
              content.classList.remove("grid-rows-[0fr]", "opacity-0");
              content.classList.add("grid-rows-[1fr]", "opacity-100");
            } else {
              content.classList.remove("grid-rows-[1fr]", "opacity-100");
              content.classList.add("grid-rows-[0fr]", "opacity-0");
            }
          }
        });
      }

      setupAccordion(mobileAccBtnPlatform);
      setupAccordion(mobileAccBtnSolutions);

      mobileDrawer.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          isMobileOpen = false;
          mobileMenuBtn.classList.remove("is-active");
          mobileDrawer.classList.remove("grid-rows-[1fr]", "opacity-100", "pointer-events-auto");
          mobileDrawer.classList.add("grid-rows-[0fr]", "opacity-0", "pointer-events-none");
        });
      });
    }

    // ==========================================
    // 4. NEWSROOM MODAL & TOAST
    // ==========================================
    const newsroomModal = document.getElementById("newsroom-modal");
    const closeNewsroomBtn = document.getElementById("close-newsroom-modal");
    const dismissModalBtn = document.getElementById("modal-dismiss-btn");
    const modalViewCasesBtn = document.getElementById("modal-view-cases-btn");
    const toast = document.getElementById("hr-toast");

    function openModal() {
      if (newsroomModal) {
        newsroomModal.classList.add("show");
        newsroomModal.setAttribute("aria-hidden", "false");
      }
    }

    function closeModal() {
      if (newsroomModal) {
        newsroomModal.classList.remove("show");
        newsroomModal.setAttribute("aria-hidden", "true");
      }
    }

    document.querySelectorAll('a[href="#newsroom"], a[href*="seriesc"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (closeNewsroomBtn) closeNewsroomBtn.addEventListener("click", closeModal);
    if (dismissModalBtn) dismissModalBtn.addEventListener("click", closeModal);
    if (modalViewCasesBtn) {
      modalViewCasesBtn.addEventListener("click", () => {
        closeModal();
        document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
      });
    }
    if (newsroomModal) {
      newsroomModal.addEventListener("click", (e) => {
        if (e.target === newsroomModal) closeModal();
      });
    }

    function showToast(msg = "Thanks for your interest! Our team will reach out shortly.") {
      if (!toast) return;
      const msgEl = document.getElementById("hr-toast-msg");
      if (msgEl) msgEl.textContent = msg;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 4500);
    }

    // ==========================================
    // 5. INTERACTIVE EMAIL DEMO FORM
    // ==========================================
    const demoForms = document.querySelectorAll("form");
    demoForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]') as HTMLInputElement | null;
        const val = input ? input.value.trim() : "";
        if (!val || !val.includes("@")) {
          showToast("Please enter a valid work email.");
          return;
        }
        showToast("Request received! An enterprise specialist will contact you.");
        if (input) input.value = "";
      });
    });

    document.querySelectorAll('a[href="#hero-agent"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const heroAgent = document.getElementById("hero-agent");
        if (heroAgent) {
          heroAgent.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            heroAgent.querySelector("input")?.focus();
          }, 500);
        }
      });
    });

    // ==========================================
    // 6. WORD-BY-WORD STATEMENT SCROLL ILLUMINATION
    // ==========================================
    const statementHeading = document.getElementById("statement-heading");

    if (statementHeading) {
      const statementSpans = statementHeading.querySelectorAll("span");
      const total = statementSpans.length;
      let ticking = false;

      function updateStatementScrub() {
        if (!statementHeading) return;
        const rect = statementHeading.getBoundingClientRect();
        const winH = window.innerHeight;

        const enterY = winH * 0.88;
        const leaveY = winH * 0.25;
        const totalDist = enterY - leaveY;
        const currentDist = enterY - rect.top;

        let progress = currentDist / totalDist;
        progress = Math.max(0, Math.min(1, progress));

        statementSpans.forEach((span, i) => {
          const threshold = i / total;
          if (progress > threshold) {
            span.classList.add("is-lit");
            const wordEnd = (i + 1) / total;
            if (progress >= wordEnd) {
              (span as HTMLElement).style.opacity = "1";
            } else {
              const frac = (progress - threshold) / (wordEnd - threshold);
              (span as HTMLElement).style.opacity = (0.25 + frac * 0.75).toFixed(2);
            }
          } else {
            span.classList.remove("is-lit");
            (span as HTMLElement).style.opacity = "0.25";
          }
        });

        ticking = false;
      }

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateStatementScrub);
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", updateStatementScrub, { passive: true });

      setTimeout(updateStatementScrub, 100);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateStatementScrub);
        document.removeEventListener("click", handleDocClick);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};
