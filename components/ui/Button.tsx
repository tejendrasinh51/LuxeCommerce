import Link from 'next/link'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  href?: string
  icon?: React.ReactNode
  loading?: boolean
  children?: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'btn-base inline-flex items-center justify-center font-body font-normal tracking-[0.04em] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] gap-2 select-none border'

  const variantStyles = {
    primary: 'bg-gold border-transparent text-[#0A0A0B] hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)]',
    secondary: 'bg-transparent border-gold text-gold hover:bg-gold/10',
    ghost: 'bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-gold-dim hover:text-[var(--color-text-primary)]',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-[0.9375rem]',
    lg: 'px-8 py-4 text-base font-medium',
  }

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
      {!loading && icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  )

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    loading && 'opacity-70 pointer-events-none',
    className
  )

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#')
    if (isInternal) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={combinedClassName} disabled={loading} {...props}>
      {content}
    </button>
  )
}
