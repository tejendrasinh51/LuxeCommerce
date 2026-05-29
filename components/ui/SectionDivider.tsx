import { cn } from '@/lib/utils'

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent',
        className
      )}
    />
  )
}
