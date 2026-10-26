"use client";

import React from "react";

export const ModalsAndToast: React.FC = () => {
  return (
    <>
      <div id="hr-toast" role="alert">
        <span
          style={
            {
              display: "inline-flex",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#d59566",
            } as React.CSSProperties
          }
        ></span>
        <span id="hr-toast-msg">
          Demo requested! Our enterprise solutions team will contact you
          shortly.
        </span>
      </div>
      <div aria-hidden="true" id="newsroom-modal">
        <div className="modal-content">
          <button
            aria-label="Close announcement"
            id="close-newsroom-modal"
            style={
              {
                position: "absolute",
                top: "18px",
                right: "20px",
                color: "#b8aea4",
                background: "none",
                border: "none",
                fontSize: "22px",
                cursor: "pointer",
              } as React.CSSProperties
            }
            type="button"
          >
            ✕
          </button>
          <div
            style={
              {
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#d59566",
                marginBottom: "12px",
              } as React.CSSProperties
            }
          >
            ● Press Release — October 2026
          </div>
          <h3
            style={
              {
                fontSize: "26px",
                fontWeight: "500",
                lineHeight: "1.2",
                marginBottom: "16px",
                color: "#ffffff",
              } as React.CSSProperties
            }
          >
            HappyRobot Raises Series C to Scale Autonomous AI Workers Across the
            Real Economy
          </h3>
          <p
            style={
              {
                fontSize: "14.5px",
                lineHeight: "1.65",
                color: "#b8aea4",
                marginBottom: "20px",
              } as React.CSSProperties
            }
          >
            Enterprises in logistics, energy, manufacturing, and supply chains
            deploy HappyRobot to run end-to-end voice and workflow operations.
            This funding expands our frontier autonomous coordination platform,
            adversarial safety evals, and multi-modal integration engine.
          </p>
          <div
            style={
              {
                display: "flex",
                gap: "12px",
                alignItems: "center",
              } as React.CSSProperties
            }
          >
            <a
              href="#case-studies"
              id="modal-view-cases-btn"
              style={
                {
                  background: "#ffffff",
                  color: "#000000",
                  padding: "10px 18px",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  display: "inline-block",
                } as React.CSSProperties
              }
            >
              Explore Customer Stories →
            </a>
            <button
              id="modal-dismiss-btn"
              style={
                {
                  background: "transparent",
                  color: "#b8aea4",
                  border: "1px solid #333",
                  padding: "10px 16px",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                } as React.CSSProperties
              }
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
