import React, { FC } from 'react';

interface ButtonProps {
  children: string;
  className: string;
  click?: () => void;
  type: 'button' | 'submit' | undefined;
}

export const Button: FC<ButtonProps> = ({ type, children, className, click }) => {
  return (
    <button type={type} className={className} onClick={click}>
      {children}
    </button>
  );
};
