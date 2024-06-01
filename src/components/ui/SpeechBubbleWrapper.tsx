import React from "react";

interface SpeechBubbleWrapperProps {
  type?: "left" | "right";
  children: React.ReactNode;
}

const BASE_CLASS = "flex w-full flex-col gap-4 lg:block";

const PC_CLASS =
  "lg:rounded-[64px] lg:p-[48px] lg:w-11/12 lg:w-fit relative lg:shadow-lg lg:shadow-neutral-950/5";

const SpeechBubbleWrapper: React.FC<SpeechBubbleWrapperProps> = ({
  type = "left",
  children,
}) => {
  const leftIs = type === "left";
  const alignItems = leftIs ? "" : "items-end lg:ml-auto lg:mr-0";
  const bgColor = leftIs ? "lg:bg-white" : "lg:bg-gray-800";
  const textColor = leftIs ? "" : "lg:text-white";
  const speechBubbleArrowDirection = leftIs
    ? "speechBubbleArrowPCLeft"
    : "speechBubbleArrowPCRight";

  return (
    <div
      className={`${BASE_CLASS} ${PC_CLASS} ${alignItems} ${bgColor} ${textColor}`}
    >
      <div
        className={`${speechBubbleArrowDirection} ${bgColor} absolute`}
      ></div>
      {children}
    </div>
  );
};

export default SpeechBubbleWrapper;
