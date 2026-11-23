import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={clsx("mb-7 sm:mb-8", centered && "text-center", className)}>
      <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-cyan bg-blue-600/15 border border-accent-cyan/30 rounded-full mb-2.5 shadow-sm">
        {tag}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2.5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
