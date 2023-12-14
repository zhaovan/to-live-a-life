"use client";
import { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import { story, endStateStory, startStateStory } from "./constants";

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
  const audioRef = useRef<HTMLAudioElement>(new Audio("/song.mp3"));

  function handleClick() {
    if (textRef.current) {
      const text = textRef.current.innerText;
      setJourney([...journey, text]);
    }
    if (gameState === GameState.start) {
      if (step === startStateStory.length - 1) {
        setGameState(GameState.journey);
        setStep(0);
        return;
      }
    } else if (gameState === GameState.journey) {
      if (step === story.length - 1) {
        setGameState(GameState.end);
        setStep(0);
        return;
      }
    }
    setStep(step + 1);
  }

  useEffect(() => {}, []);

  const maxAge = story[step].age;
  const minAge = step === 0 ? 0 : story[step].age - 9;
  const randomAge = Math.floor(Math.random() * (maxAge - minAge)) + minAge;
  return (
    <div
      className="h-screen w-full flex gap-6 p-6 font-facade bg-yellow-50"
      onMouseMove={() => {
        if (audioRef.current.paused) {
          audioRef.current.play();
          audioRef.current.loop = true;
        }
      }}
    >
      <div className="w-[66vw] border border-black p-6 flex items-center justify-center">
        <div className="w-1/2 flex flex-col gap-2">
          {gameState === GameState.start && (
            <>
              <p className="text-xl">{startStateStory[step]}</p>
              <Button handleClick={() => handleClick()}>...</Button>
            </>
          )}
          {gameState === GameState.journey && (
            <>
              <h1 className="text-xl">you are {randomAge} years old</h1>
              <p className="font-serif text-xl" ref={textRef}>
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
              story[step].buttonOptions!.length > 0 ? (
                story[step].buttonOptions!.map((buttonOption, idx) => {
                  const buttonText = buttonOption.text;
                  function handleButtonClick() {
                    if (buttonOption.step === 0) {
                      setStep(step + 1);
                    } else if (buttonOption.step === -1) {
                      setGameState(GameState.end);
                    } else {
                      setStep(0);
                      setJourney([]);
                    }
                  }
                  return (
                    <Button key={idx} handleClick={handleButtonClick}>
                      {buttonText}
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
              <p className="text-xl">{endStateStory[step]}</p>
              <Button handleClick={() => handleClick()}>...</Button>
            </>
          )}
        </div>
      </div>
      <div className="border border-gray-700 overflow-scroll no-scrollbar w-[33vw] p-6 flex flex-col gap-4">
        <h1 className="text-2xl">your journey</h1>
        {journey && (
          <div className="flex flex-col gap-2">
            {journey.map((journeyItem, idx) => {
              return <p key={idx}>{journeyItem}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
