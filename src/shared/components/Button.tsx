import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
}

export const Button = ({
  text = 'Hello',
  variant = 'primary',
  children,
  className,
  ...rest
}: ButtonProps) => {
  const baseStyle =
    'cursor-pointer rounded-xl py-4 w-full text-sm font-semibold transition flex justify-center items-center gap-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      'border border-gray-300 text-gray-600 hover:opacity-50 duration-200',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className || ''}`}
      {...rest}
    >
      {children}
      {text}
    </button>
  );
};
