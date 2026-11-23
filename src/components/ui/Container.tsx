import React from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx("w-full max-w-7xl xl:max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </div>
  );
};
