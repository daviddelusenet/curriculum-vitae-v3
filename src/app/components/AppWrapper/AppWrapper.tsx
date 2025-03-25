import { FC, PropsWithChildren } from "react";

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-10 md:px-8 md:pb-20">
      {children}
    </div>
  );
};
