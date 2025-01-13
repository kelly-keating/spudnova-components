import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  onClick: () => void;
  children: ReactNode
}

function Button ({ children, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {children || "Click Me!"}
    </button>
  )
}

export default Button;
