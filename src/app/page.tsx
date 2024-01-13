"use client";
import { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import { story, endStateStory, startStateStory } from "./constants";
import Stars from "./components/Stars";
import Journey from "./components/Journey";
import TitleText from "./components/TitleText";
import Image from "next/image";
import { motion } from "framer-motion";

enum GameState {
  start,
  journey,
  end,
}

export default function Home() {
  const [totalStep, setTotalStep] = useState(1);
  const [step, setStep] = useState(0);
  const [journey, setJourney] = useState<string[]>([]);
  const [age, setAge] = useState(0);

  const textRef = useRef<HTMLParagraphElement>(null);
  const [gameState, setGameState] = useState(GameState.start);
  const [finished, setFinished] = useState(false);

  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio("bg.mp3");
    audio.volume = 0.04;
    setAudio(audio);
  }, []);

  const maxAge = story[step].age;
  const ageGrowth = Math.floor(Math.random() * 3) + 8;

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
    } else if (gameState === GameState.end) {
      if (step === endStateStory.length) {
        setFinished(true);
        audio?.pause();
        return;
      }
    }

    if (gameState === GameState.journey) {
      if (age >= maxAge) {
        setStep(step + 1);
        setAge(age + ageGrowth);
        return;
      } else {
        setAge(age + ageGrowth);
        return;
      }
    }
    setStep(step + 1);
    setTotalStep(totalStep + 1);
  }
  useEffect(() => {}, [step]);

  return (
    <div className="relative overflow-hidden">
      {finished && (
        <motion.div
          className="bg-black absolute z-50 h-screen w-screen"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 10 }}
        />
      )}
      <div className="bg h-screen w-[200vw] absolute" />
      <Image
        src="/walk.gif"
        height="48"
        width="48"
        className="absolute z-20 bottom-44 scale-[2] left-40"
        alt={""}
      />
      <Stars journeyStep={totalStep} />
      {/* <Journey journey={journey} /> */}
      <div
        className=" relative h-screen w-full flex gap-6 p-6 "
        suppressHydrationWarning
        onMouseMove={() => {
          if (audio?.paused) {
            audio.play();
            audio.loop = true;
          }
        }}
      >
        <div className="w-full p-24  flex items-end justify-center">
          <div
            className="absolute w-1/2 flex flex-col gap-4"
            suppressHydrationWarning
            style={{
              left: 2 + Math.random() * 50 + "vw",
              top: 5 + Math.random() * 30 + "vh",
            }}
          >
            {gameState === GameState.start && (
              <div>
                <TitleText>{startStateStory[step]}</TitleText>
              </div>
            )}
            {gameState === GameState.journey && (
              <div>
                <TitleText>you are {age} years old</TitleText>
                <p className="text-xl w-96" ref={textRef}>
                  {story[step].textBlock.map((textBlock, idx) => {
                    const randomOption = Math.floor(
                      Math.random() * textBlock.textOptions.length
                    );
                    const lifeChoice = textBlock.text.replace(
                      "[INSERT]",
                      textBlock.textOptions[randomOption]
                    );

                    return <span key={idx}>{lifeChoice}</span>;
                  })}
                </p>
              </div>
            )}
            {gameState === GameState.end && (
              <div>
                <TitleText>{endStateStory[step]}</TitleText>
              </div>
            )}
            {!finished && (
              <div className="flex flex-col relative gap-2">
                {story[step].buttonOptions &&
                gameState === GameState.journey &&
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
                        setAge(0);
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
                  <Button handleClick={handleClick}>
                    {gameState === GameState.journey
                      ? "live a little more"
                      : "reach for the stardust"}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
