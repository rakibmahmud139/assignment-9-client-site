"use client";
import React, { ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
}

export default function SpotlightCard({ children }: SpotlightCardProps) {
  return (
    <>
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }

        .animate-border {
          animation: border-spin 6s linear infinite;
          padding: 2px; /* space for animated border */
          background: conic-gradient(
            from var(--border-angle),
            #6c7fd8,
            #8f6ed5,
            #b8c6ff
          );
          border-radius: 20px; /* match your inner card radius */
          display: inline-block;
        }

        .card-inner {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
        }
      `}</style>
      <div className="animate-border">
        <div className="card-inner">{children}</div>
      </div>
    </>
  );
}
