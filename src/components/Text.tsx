import type { FC } from "react";

const Text: FC<{ text: string; extraClass?: string }> = ({
  text,
  extraClass,
}) => {
  return <p className={`text-[16px] font-normal ${extraClass}`}>{text}</p>;
};

export default Text;
