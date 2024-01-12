import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  children: React.ReactNode;
}

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      className="button relative  text-slate-950 bg-purple-200 px-3 py-2 w-40 hover:bg-purple-300 border border-black rounded-full"
      onClick={handleClick}
    >
      <p className="text-xl">{children}</p>
    </button>
  );
}
