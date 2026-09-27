const getEmojiSize = (type: "small" | "medium" | "large") => {
  switch (type) {
    case "small":
      return "text-xl";
    case "medium":
      return "text-7xl";
    case "large":
      return "text-9xl";
  }
};

const getAnimationDirection = (index: number) =>
  (index + 1) % 2 === 0 ? "vertical" : "horizontal";
const getAnimationAlternate = (index: number) =>
  index < 5 ? "alternate-reverse" : "alternate";

const getAnimationStyles = (index: number, speed: number) => {
  const animationDirection = getAnimationDirection(index);
  const isHorizontal = animationDirection === "horizontal";
  const alternate = getAnimationAlternate(index);
  const left = isHorizontal ? 0 : `calc(100vw / 10 * ${index})`;
  const top = isHorizontal ? `calc(80vh / 10 * ${index})` : 0;

  return {
    animation: `${animationDirection} ${speed}s ease-in-out infinite ${alternate} both`,
    left,
    top,
  };
};

const emojiToUnicodeHex = (emoji: string) => {
  if (emoji.length === 0) {
    throw new Error("Invalid emoji input");
  }
  // FE0F forces color presentation and bypasses Noto Emoji's monochrome glyphs.
  // Preserve the remaining sequence, including ZWJ, skin tones, and flag pairs.
  return Array.from(emoji.replace(/\uFE0F/g, ""))
    .map(
      (character) =>
        `&#x${character.codePointAt(0)!.toString(16).toUpperCase()};`,
    )
    .join("");
};

export { getEmojiSize, getAnimationStyles, emojiToUnicodeHex };
