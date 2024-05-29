import React from "react";

interface SpeechBubbleWrapperProps {
  type?: "left" | "right";
  children: React.ReactNode;
}

const SpeechBubbleWrapper: React.FC<SpeechBubbleWrapperProps> = ({
  type = "left",
  children,
}) => {
  const leftIs = type === "left";
  const alignItems = leftIs ? "" : "items-end";
  return (
    <div className={`flex w-full flex-col gap-4 ${alignItems}`}>{children}</div>
  );
};

export default SpeechBubbleWrapper;
