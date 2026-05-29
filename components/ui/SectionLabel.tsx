export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-gold mb-4 select-none">
      <span className="w-6 h-px bg-gold" />
      {children}
    </span>
  )
}
