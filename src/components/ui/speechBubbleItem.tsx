import React from "react";

interface SpeechBubbleItemProps {
  type?: "left" | "right";
  children: React.ReactNode;
}

const BASE_CLASS =
  "relative rounded-[24px] p-4 shadow-lg shadow-neutral-950/5 w-11/12";

const PC_CLASS = "lg:rounded-none lg:p-0 lg:shadow-none lg:w-full";

const SpeechBubbleItem: React.FC<SpeechBubbleItemProps> = ({
  type = "left",
  children,
}) => {
  const leftIs = type === "left";
  const speechBubbleArrowDirection = leftIs
    ? "speechBubbleArrowLeft"
    : "speechBubbleArrowRight";
  const bgColor = leftIs
    ? "bg-white lg:bg-inherit"
    : "bg-gray-800 lg:bg-transparent";
  const textColor = leftIs ? "" : "text-white lg:text-inherit";

  return (
    <div className={`${BASE_CLASS} ${PC_CLASS} ${bgColor} ${textColor}`}>
      <div
        className={`${speechBubbleArrowDirection} ${bgColor} absolute lg:hidden`}
      ></div>
      <div>{children}</div>
    </div>
  );
};

export default SpeechBubbleItem;
