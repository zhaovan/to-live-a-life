import { useState } from "react";

type StarsProps = {
  journeyStep: number;
};

export default function Stars({ journeyStep }: StarsProps) {
  const numStars = journeyStep * 20;

  const possibleStars = ["✵", "✹", "✷", "✸", "✺", "✹", "✷", "✸", "✺"];

  return (
    <div className="stars-container">
      {[...Array(numStars)].map((_, i) => {
        return (
          <p
            className="stars cursor-crosshair z-20"
            suppressHydrationWarning
            style={{
              top: Math.random() * 95 + "vh",
              left: Math.random() * 95 + "vw",
              animationDuration: 2 + Math.random() * 3 + "s",
            }}
            key={i}
          >
            {possibleStars[Math.floor(Math.random() * possibleStars.length)]}
          </p>
        );
      })}
    </div>
  );
}
