"use client";
import { useState, useRef } from "react";
import Button from "./components/Button";

const story = [
  {
    age: 0,
    textBlock: [
      {
        text: "you are born from [INSERT]",
        textOptions: ["a c section", "force", "an open question"],
      },
    ],
  },
  {
    age: 10,
    textBlock: [
      {
        text: "you [INSERT]",
        textOptions: [
          "speak your first word",
          "take your first steps",
          "hold your father",
          "are rushed to the hospital suffering from an incurable disease",
        ],
      },
    ],
  },
  {
    age: 20,
    textBlock: [
      {
        text: "school occurs. you bring out your lunchbox filled with [INSERT]. you nibble a corner and it reminds you that there are worlds within worlds.",
        textOptions: [
          "lunchables",
          "steamed fish and rice",
          "nothing",
          "a peanut butter and jelly sandwich",
        ],
      },
    ],
  },
  {
    age: 30,
    textBlock: [
      {
        text: "if you were to question [INSERT], what would you ask?",
        textOptions: ["god", "your father", "the world", "this life"],
      },
    ],
    buttonOptions: [
      "to be reborn",
      "to love, to be loved",
      "for mercy and understanding",
    ],
  },
  {
    age: 40,
    textBlock: [
      {
        text: "a [INSERT] ",
        textOptions: ["boy", "girl", "bird"],
      },
      {
        text: "comes up and asks for the [INSERT] ",
        textOptions: ["cards", "lunch", "life"],
      },
      {
        text: "in your hands. your father entrusted these to you when he [INSERT] last week.",
        textOptions: ["passed", "went on vacation", "held you", "kissed you"],
      },
    ],
  },
  {
    age: 50,
    textBlock: [
      {
        text: "[INSERT]",
        textOptions: [
          "nestled in the tree-lined neighborhood, mixed with fresh fruit and asphalt lies a small house. a single light dimly lights up a bedroom. inside there is a desk, a queen bed, two dresses. in the bathroom, light humming can be heard. on the carpet of the room next door, a chest of toys overflows, spilling out onto the floor.",
          "you step out into the porch. the wind seeps into the nooks of your hair as you pull her aside by the waist. around you, there are peach and olive farms. the supple fruit dangles languidly. pit to flesh. the tongue lusts for nectar. she provides. a herd of broken peaches gush on the ground",
          "a pot wafts with garlicky want. your father never told you how he broke down roots, to crush the cloves under metal skin. how he used to forage for mushrooms in the nearby woods. how the vines clawed into his feet",
        ],
      },
    ],
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [journey, setJourney] = useState([]);
  const textRef = useRef<HTMLParagraphElement>(null);

  function handleClick() {
    if (textRef.current) {
      const text = textRef.current.innerText;
      setJourney([...journey, text]);
    }

    setStep(step + 1);
  }

  const maxAge = story[step].age;
  const minAge = step === 0 ? 0 : story[step].age - 9;
  const randomAge = Math.floor(Math.random() * (maxAge - minAge)) + minAge;
  return (
    <div className="h-screen w-full flex gap-6 p-6 font-facade bg-gray-300">
      <div className="w-[66vw] border border-black p-6 flex items-center justify-center">
        <div className="w-1/2 flex flex-col gap-2">
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

              return <span key={idx}>{lifeChoice}</span>;
            })}
          </p>

          {story[step].buttonOptions && story[step].buttonOptions.length > 0 ? (
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
        </div>
      </div>
      <div className="border border-gray-700 w-[33vw] p-6">
        <h1 className="text-2xl ">your journey so far</h1>
        {journey.map((journeyItem, idx) => {
          return <p>{journeyItem}</p>;
        })}
      </div>
    </div>
  );
}
