import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  children: React.ReactNode;
}

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      className="bg-purple-200 px-3 py-2 hover:bg-purple-400"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
