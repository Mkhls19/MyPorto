import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-slate-900/70 backdrop-blur-md border border-white/[0.08] rounded-2xl shadow-xl transition-all duration-300",
        hoverEffect && "hover:border-accent-cyan/40 hover:shadow-glow/40 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
