interface SectionHeaderProps {
  label: string
}

export function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="text-xs uppercase tracking-widest text-primary font-medium">{label}</span>
    </div>
  )
}
