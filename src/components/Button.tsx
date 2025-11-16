import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  onClick?: () => void;
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  size = 'default',
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-block text-center';
  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  };
  const sizeStyles = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  return <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </button>;
}