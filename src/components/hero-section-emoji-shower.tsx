import { Noto_Emoji } from "next/font/google";

const emojiFont = Noto_Emoji({
  subsets: ["emoji"],
  weight: "300",
  display: "swap",
});

const EmojiShower: React.FC = () => {
  const emojis = [
    "😊",
    "😂",
    "❤️",
    "👍",
    "🎉",
    "🥳",
    "😎",
    "💖",
    "👏",
    "🤔",
    "😆",
    "🔥",
    "✨",
    "🥺",
    "🤗",
    "😁",
    "😅",
    "🙌",
    "😇",
    "🍕",
    "🎈",
    "🎶",
    "🌟",
    "🍰",
    "💪",
    "🌸",
    "🎂",
    "🎁",
    "🌞",
    "🍔",
    "🎨",
    "💃",
    "🎊",
    "🕺",
    "🚀",
    "🌈",
    "🌍",
    "🧁",
    "🎵",
    "🍿",
    "🏆",
    "🧸",
    "🎮",
    "👑",
    "🍓",
    "🎲",
    "🚴",
    "🍟",
    "🦄",
    "🌺",
  ];

  const randomEmojis = [];

  for (let i = 1; i <= 7; i++) {
    const randomNumber = Math.floor(Math.random() * 51);
    randomEmojis.push(emojis[randomNumber]);
  }

  console.log(randomEmojis);

  const rainbowColors = [
    "text-rose-500",
    "text-orange-500",
    "text-yellow-500",
    "text-lime-500",
    "text-sky-500",
    "text-indigo-500",
    "text-purple-500",
  ];

  const rainbowColors2 = [
    "bg-rose-100",
    "bg-orange-100",
    "bg-yellow-100",
    "bg-lime-100",
    "bg-sky-100",
    "bg-indigo-100",
    "bg-purple-100",
  ];

  const animations = [
    "animate-[topTpBottomAtHero_6s_linear_infinite]",
    "animate-[topTpBottomAtHero_6.5s_linear_infinite]",
    "animate-[topTpBottomAtHero_7s_linear_infinite]",
    "animate-[topTpBottomAtHero_7.5s_linear_infinite]",
    "animate-[topTpBottomAtHero_8s_linear_infinite]",
    "animate-[topTpBottomAtHero_8.5s_linear_infinite]",
    "animate-[topTpBottomAtHero_9s_linear_infinite]",
    "animate-[topTpBottomAtHero_9.5s_linear_infinite]",
  ];

  const animationsSp = [
    "lg:animate-[topTpBottomAtHeroSp_6s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_6.5s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_7s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_7.5s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_8s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_8.5s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_9s_linear_infinite]",
    "lg:animate-[topTpBottomAtHeroSp_9.5s_linear_infinite]",
  ];

  return (
    <div className=" absolute -right-2 -top-8 z-0 flex h-[150vh] rotate-12 lg:-top-[15vh] lg:right-4 lg:rotate-[25deg]">
      {randomEmojis.map((emoji, index) => {
        return (
          <>
            <div
              key={index}
              className={`${emojiFont.className} ${rainbowColors[index]} ${rainbowColors2[index]}
              px-1 text-3xl lg:px-2 lg:text-6xl`}
            >
              <div className={`${animations[index]} ${animationsSp[index]}`}>
                {emoji}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default EmojiShower;
