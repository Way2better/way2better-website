import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 text-center';

  const variants = {
    primary: 'bg-primary-300 text-white hover:bg-primary-400 hover:shadow-glow',
    secondary: 'bg-slate-900 border border-white/5/5 text-white hover:bg-slate-900 border border-white/5/10',
    outline: 'border-2 border-primary-500 text-primary-300 hover:bg-primary-300/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
