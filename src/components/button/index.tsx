import React, { FC } from 'react';

interface ButtonProps {
  children: string;
  className: string;
  click?: () => void;
  type: 'button' | 'submit' | undefined;
  disabled?: boolean | undefined;
}

export const Button: FC<ButtonProps> = ({ type, disabled, children, className, click }) => {
  return (
    <button disabled={disabled} type={type} className={className} onClick={click}>
      {children}
    </button>
  );
};
