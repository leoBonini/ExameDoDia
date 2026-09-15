interface Props {
  atual: number
  total: number
}

export function ProgressBar({ atual, total }: Props) {
  const pct = Math.round((atual / (total - 1)) * 100)
  return (
    <div className="max-w-xl mx-auto px-5 pt-4">
      <div className="h-1.5 rounded-full bg-[var(--cor-borda)] overflow-hidden">
        <div
          className="h-full bg-[var(--cor-destaque)] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
