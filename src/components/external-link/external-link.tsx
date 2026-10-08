import type { ComponentProps } from "react";

type ExternalLinkProps = ComponentProps<"a"> & {
  href: string;
};

export const ExternalLink = ({
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: ExternalLinkProps) => {
  return <a target={target} rel={rel} {...props} />;
};
