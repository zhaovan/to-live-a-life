"use client";
import { useState, useRef } from "react";
import Button from "./components/Button";
import { story, endStateStory } from "./constants";

enum GameState {
  start,
  journey,
  end,
}

export default function Home() {
  const [step, setStep] = useState(0);
  const [journey, setJourney] = useState<string[]>([]);

  const textRef = useRef<HTMLParagraphElement>(null);
  const [gameState, setGameState] = useState(GameState.start);
  const [endStateStep, setEndStateStep] = useState(0);

  function handleClick() {
    if (textRef.current) {
      const text = textRef.current.innerText;
      setJourney([...journey, text]);
    }
    if (step === story.length - 1) {
      setGameState(GameState.end);
    }
    setStep(Math.min(step + 1, story.length - 1));
  }

  const maxAge = story[step].age;
  const minAge = step === 0 ? 0 : story[step].age - 9;
  const randomAge = Math.floor(Math.random() * (maxAge - minAge)) + minAge;
  return (
    <div className="h-screen w-full flex gap-6 p-6 font-facade bg-gray-300">
      <div className="w-[66vw] border border-black p-6 flex items-center justify-center">
        <div className="w-1/2 flex flex-col gap-2">
          {gameState === GameState.start && (
            <>
              <p>{endStateStory[endStateStep]}</p>
              <Button handleClick={() => setEndStateStep(endStateStep + 1)}>
                ...
              </Button>
            </>
          )}
          {gameState === GameState.journey && (
            <>
              <h1 className="text-lg">you are {randomAge} years old</h1>
              <p className="font-serif" ref={textRef}>
                {story[step].textBlock.map((textBlock, idx) => {
                  const randomOption = Math.floor(
                    Math.random() * textBlock.textOptions.length
                  );
                  const lifeChoice = textBlock.text.replace(
                    "[INSERT]",
                    textBlock.textOptions[randomOption]
                  );

                  return (
                    <span key={idx} suppressHydrationWarning>
                      {lifeChoice}
                    </span>
                  );
                })}
              </p>

              {story[step].buttonOptions &&
              story[step].buttonOptions.length > 0 ? (
                story[step].buttonOptions!.map((buttonOption, idx) => {
                  return (
                    <Button key={idx} handleClick={handleClick}>
                      {buttonOption}
                    </Button>
                  );
                })
              ) : (
                <Button handleClick={handleClick}>go on</Button>
              )}
            </>
          )}
          {gameState === GameState.end && (
            <>
              <p>{endStateStory[endStateStep]}</p>
              <Button handleClick={() => setEndStateStep(endStateStep + 1)}>
                ...
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="border border-gray-700 overflow-scroll w-[33vw] p-6 flex flex-col gap-4">
        <h1 className="text-2xl">your journey</h1>
        <div className="flex flex-col gap-2">
          {journey.map((journeyItem, idx) => {
            return <p key={idx}>{journeyItem}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
