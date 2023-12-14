export const story = [
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
        text: "school slaps you awake for the first time. you bring out your lunchbox filled with [INSERT]. you nibble a corner and it reminds you that there are worlds within worlds.",
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
      { text: "to be reborn", step: 1 },
      { text: "to love, to be loved", step: 0 },
      { text: "for mercy and understanding", step: -1 },
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
  {
    age: 60,
    textBlock: [
      {
        text: "the [INSERT] crack happens. it had been happening over the years, but now it’s louder, pulsing",
        textOptions: ["first", "third", "fifth", "one hundredth"],
      },
    ],
  },
  {
    age: 70,
    textBlock: [
      {
        text: "placeholder",
        textOptions: ["placeholder"],
      },
    ],
  },
  {
    age: 80,
    textBlock: [
      {
        text: "somedays, a little [INSERT] matters",
        textOptions: ["card", "lunch", "life"],
      },
    ],
  },
  {
    age: 90,
    textBlock: [
      {
        text: "everyone you love has died. you too, shall pass. their memories live within you.",
        textOptions: [],
      },
    ],
  },
  {
    age: 100,
    textBlock: [
      {
        text: "when he turned this age, he wished that he could be born again. what did he mean by that?",
        textOptions: [],
      },
    ],
  },
];

export const endStateStory = [
  "in death, the second law of thermodynamics is broken",
  "if humans are bundles of complexity, then what is death?",
  "a breakage of entropy",
  "there is no energy in scattered stardust",
  "only stillness",
];

export const startStateStory = [
  "according to the second law of thermodynamics, everything moves towards entropy",
  "entropy (noun): a gradual decline into disorder",
  "even something as complex as human birth must abide to law",
];
