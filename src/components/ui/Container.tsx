import React from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx("w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14", className)} {...props}>
      {children}
    </div>
  );
};
