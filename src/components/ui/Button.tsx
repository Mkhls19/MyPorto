import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "muted";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer rounded-full select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm",
    md: "px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-bold",
  };

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-hover text-white border border-blue-500 shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-slate-900/60 backdrop-blur-md text-white border border-white/15 hover:border-accent-cyan hover:text-accent-cyan hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
    muted:
      "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:-translate-y-0.5 active:translate-y-0",
  };

  const combinedStyles = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
