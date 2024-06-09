import { emojiToUnicodeHex } from "@/utils/animated-emoji";
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
    const randomNumber = Math.floor(Math.random() * 50);
    randomEmojis.push(emojis[randomNumber]);
  }

  const textRainbowColors = [
    "text-rose-500",
    "text-orange-500",
    "text-yellow-500",
    "text-lime-500",
    "text-sky-500",
    "text-indigo-500",
    "text-purple-500",
  ];

  const bgRainbowColors = [
    "bg-rose-100",
    "bg-orange-100",
    "bg-yellow-100",
    "bg-lime-100",
    "bg-sky-100",
    "bg-indigo-100",
    "bg-purple-100",
  ];

  const animationsSp = [
    "animate-[topToBottomAtHeroSp_6s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_6.5s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_7s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_7.5s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_8s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_8.5s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_9s_linear_infinite]",
    "animate-[topToBottomAtHeroSp_9.5s_linear_infinite]",
  ];

  const animationsPc = [
    "lg:animate-[topToBottomAtHeroPc_6s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_6.5s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_7s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_7.5s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_8s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_8.5s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_9s_linear_infinite]",
    "lg:animate-[topToBottomAtHeroPc_9.5s_linear_infinite]",
  ];

  return (
    <div className=" absolute -right-2 -top-8 z-0 flex h-[150vh] rotate-12 lg:-top-[15vh] lg:right-4 lg:rotate-[25deg]">
      {randomEmojis.map((emoji, index) => {
        const notoEmoji = emojiToUnicodeHex(emoji);
        return (
          <div
            key={index}
            className={`${emojiFont.className} ${textRainbowColors[index]} ${bgRainbowColors[index]}
              px-1 text-3xl lg:px-2 lg:text-6xl`}
          >
            <div
              className={`${animationsSp[index]} ${animationsPc[index]}`}
              dangerouslySetInnerHTML={{ __html: notoEmoji }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default EmojiShower;
