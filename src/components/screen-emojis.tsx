import AnimatedEmoji from "./animated-emoji";
import contributorsReversed from "../utils/contributors-reversed";

type ScreenEmojisProps = {
  contributors: typeof contributorsReversed;
  isTopSection?: boolean;
};

const ScreenEmojis: React.FC<ScreenEmojisProps> = ({
  contributors,
  isTopSection,
}) => {
  return (
    <>
      <div className="relative font-notoEmoji">
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
