import React from 'react';

/**
 * Reusable modern button component with Figma gradient styles and hover animations.
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
    sm: 'px-4 py-2.5 text-sm font-semibold rounded-xl',
    md: 'px-6 py-3.5 text-base font-bold rounded-2xl',
    lg: 'px-8 py-4 text-lg font-extrabold rounded-2xl'
  };

  const variantClasses = {
    primary: `bg-gradient-to-r from-[#A259FF] via-[#FF7262] to-[#F24E1E] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]`,
    secondary: `bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98]`,
    success: `bg-gradient-to-r from-[#0ACF83] to-[#1ABCFE] text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]`,
    accent: `bg-gradient-to-r from-[#1ABCFE] to-[#A259FF] text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]`
  };

  const disabledClasses = `bg-gray-700/60 text-gray-400 cursor-not-allowed border-gray-600/30 opacity-60 shadow-none hover:scale-100 active:scale-100 hover:shadow-none`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2.5 transition-all duration-200 ease-out select-none
        ${sizeClasses[size] || sizeClasses.md}
        ${disabled ? disabledClasses : variantClasses[variant] || variantClasses.primary}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {Icon && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />}
      <span>{children}</span>
    </button>
  );
}
