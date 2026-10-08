import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="mb-6 font-light text-lg leading-normal md:mb-10 md:text-2xl">
      {children}
    </p>
  );
};
