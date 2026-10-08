import type { ReactNode } from "react";
import { Title } from "@/components/title/title";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};
