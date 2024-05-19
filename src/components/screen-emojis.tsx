import AnimatedEmoji from "./animated-emoji";
import contributors from "../../Contributors.json";
import { Noto_Emoji } from "next/font/google";

const emoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: "300",
  display: "swap",
});

type SectionBackgroundEmojisProps = {
  contributors: typeof contributors;
  isTopSection?: boolean;
};

const ScreenEmojis: React.FC<SectionBackgroundEmojisProps> = ({
  contributors,
  isTopSection,
}) => {
  return (
    <>
      <div className={`${emoji.className} relative`}>
        {contributors.map((contributor, index) => (
          <AnimatedEmoji
            key={index}
            index={index}
            contributor={contributor}
            isTopSection={isTopSection}
          />
        ))}
      </div>
    </>
  );
};

export default ScreenEmojis;
