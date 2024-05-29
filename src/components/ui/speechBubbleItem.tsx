import React from "react";

interface SpeechBubbleItemProps {
  type?: "left" | "right";
  children: React.ReactNode;
}

const TEXT_CLASS =
  "relative rounded-[24px] p-4 shadow-lg shadow-slate-900/10 before:bg-red-200 w-11/12";

const SpeechBubbleItem: React.FC<SpeechBubbleItemProps> = ({
  type = "left",
  children,
}) => {
  const leftIs = type === "left";

  const speechBubbleArrowDirection = leftIs
    ? "speechBubbleArrowLeft"
    : "speechBubbleArrowRight";

  const bgColor = leftIs ? "bg-white" : "bg-gray-800";
  const textColor = leftIs ? "" : "text-white";

  console.log(type, speechBubbleArrowDirection);

  return (
    <div className={`${TEXT_CLASS} ${bgColor} ${textColor}`}>
      <div
        className={`${speechBubbleArrowDirection} ${bgColor} absolute`}
      ></div>
      <div id="SpeechBubbleItem__inner">{children}</div>
    </div>
  );
};

export default SpeechBubbleItem;
