import type { FC } from "react";

const Heading: FC<{ text: string; extraClass?: string }> = ({
  text,
  extraClass,
}) => {
  return <h1 className={`font-bold text-[24px] ${extraClass}`}>{text}</h1>;
};

export default Heading;
