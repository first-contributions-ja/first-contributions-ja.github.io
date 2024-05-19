import {
  emojiToUnicodeHex,
  getAnimationStyles,
  getEmojiSize,
} from "@/utils/animated-emoji";
import contributors from "../../Contributors.json";

type AnimatedEmojiProps = {
  index: number;
  contributor: (typeof contributors)[number];
  size?: "small" | "medium" | "large";
  isTopSection?: boolean;
};

const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({
  index,
  contributor,
  isTopSection = false,
}) => {
  const emojiSize = getEmojiSize(
    isTopSection && index === 0 ? "large" : "medium",
  );
  const speed = Math.floor(Math.random() * 65 + 35) / 10;
  const styles = getAnimationStyles(index, speed);
  const notoEmoji = emojiToUnicodeHex(contributor.favoriteEmoji);

  return (
    <>
      <div
        className={` group absolute flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-transparent [perspective:1000px]`}
        style={styles as React.CSSProperties}
      >
        <div className="relative h-full w-full rounded-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute h-full w-full rounded-full [backface-visibility:hidden]">
            <div
              className={`flex h-full w-full flex-col items-center justify-center gap-0.5 text-black ${emojiSize}`}
              dangerouslySetInnerHTML={{ __html: notoEmoji }}
            ></div>
          </div>
          <div
            style={{ borderColor: contributor.favoriteColor }}
            className="absolute h-full w-full rounded-full border-4 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            <img
              src={`${contributor.github}.png`}
              loading="lazy"
              alt="contributor's icon"
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedEmoji;
