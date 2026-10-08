import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

const styles = {
  h1: "text-4xl md:text-6xl",
  h2: "mb-4 text-3xl underline decoration-1 underline-offset-6 md:text-4xl",
} satisfies Record<NonNullable<TitleProps["as"]>, string>;

export const Title = ({ children, as: Tag = "h2", className }: TitleProps) => {
  return (
    <Tag className={twMerge("font-bold font-serif", styles[Tag], className)}>
      {children}
    </Tag>
  );
};
