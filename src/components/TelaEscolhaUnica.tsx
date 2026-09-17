import { useEffect, useRef } from 'react'
import { Etapa } from './Etapa'

const ATRASO_AVANCO_MS = 150

interface Props {
  overline: string
  pergunta: string
  opcoes: string[]
  valor: string | null
  onEscolher: (valor: string) => void
  onVoltar: () => void
  onAvancar: () => void
}

export function TelaEscolhaUnica({
  overline,
  pergunta,
  opcoes,
  valor,
  onEscolher,
  onVoltar,
  onAvancar,
}: Props) {
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function escolher(opcao: string) {
    onEscolher(opcao)
    timeoutRef.current = window.setTimeout(onAvancar, ATRASO_AVANCO_MS)
  }

  return (
    <Etapa overline={overline} titulo={pergunta} onVoltar={onVoltar}>
      <div className="py-4 flex flex-col gap-2">
        {opcoes.map((opcao) => (
          <button
            key={opcao}
            type="button"
            onClick={() => escolher(opcao)}
            aria-pressed={valor === opcao}
            className={`text-left px-4 py-3 rounded-xl border transition-colors cursor-pointer ${
              valor === opcao
                ? 'bg-[var(--cor-destaque-suave)] border-[var(--cor-destaque)]'
                : 'border-[var(--cor-borda)] hover:border-[var(--cor-destaque)]'
            }`}
          >
            {opcao}
          </button>
        ))}
      </div>
    </Etapa>
  )
}
