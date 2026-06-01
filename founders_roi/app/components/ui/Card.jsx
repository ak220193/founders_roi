import React from "react";

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer tracking-tight";
  const styles =
    variant === "primary"
      ? `${baseStyle} bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-95 shadow-lg shadow-indigo-500/10 border border-indigo-500/20`
      : `${baseStyle} bg-slate-900 text-slate-200 border border-slate-800 hover:bg-slate-800/80 hover:text-white`;

  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
