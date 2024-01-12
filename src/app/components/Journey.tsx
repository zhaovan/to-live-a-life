import React from "react";

type JourneyProps = {
  journey: Array<string>;
};

export default function Journey({ journey }: JourneyProps) {
  if (!journey) {
    return;
  }

  return (
    <div className="absolute">
      {journey.map((journeyItem, idx) => {
        return (
          <p key={idx} className="italic opacity-10" style={{}}>
            {journeyItem}
          </p>
        );
      })}
    </div>
  );
}
