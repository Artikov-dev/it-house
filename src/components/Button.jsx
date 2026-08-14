import React from 'react';

/**
 * Minimalist black & white button component.
 */
export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
  icon: Icon = null,
  type = 'button',
  fullWidth = false,
  size = 'md'
}) {
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-xs font-bold rounded-xl',
    md: 'px-6 py-3 text-sm font-bold rounded-xl',
    lg: 'px-8 py-3.5 text-base font-extrabold rounded-2xl'
  };

  const variantClasses = {
    primary: `bg-white text-black hover:bg-zinc-200 active:bg-zinc-300 shadow-md font-extrabold border border-white`,
    secondary: `bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 font-bold active:bg-zinc-950`,
    success: `bg-white text-black hover:bg-zinc-200 active:bg-zinc-300 font-extrabold border border-white`,
    outline: `bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold`
  };

  const disabledClasses = `bg-zinc-800 text-zinc-500 cursor-not-allowed border-zinc-800 opacity-50 shadow-none`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2.5 transition-all duration-150 ease-out select-none cursor-pointer
        ${sizeClasses[size] || sizeClasses.md}
        ${disabled ? disabledClasses : variantClasses[variant] || variantClasses.primary}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
