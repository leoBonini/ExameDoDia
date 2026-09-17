import { useEffect, useRef } from 'react'
import { Etapa } from './Etapa'
import type { YesNo, YesNoAnswer } from '../types'

const ATRASO_AVANCO_MS = 380

interface Props {
  overline: string
  pergunta: string
  resposta: YesNoAnswer
  onChange: (resposta: Partial<YesNoAnswer>) => void
  followUpOn: 'sim' | 'nao'
  followUpPrompt: string
  onVoltar: () => void
  onAvancar: () => void
  aviso?: string
}

export function TelaSimNao({
  overline,
  pergunta,
  resposta,
  onChange,
  followUpOn,
  followUpPrompt,
  onVoltar,
  onAvancar,
  aviso,
}: Props) {
  const timeoutRef = useRef<number | null>(null)
  const mostrarFollowUp = resposta.value === followUpOn

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function escolher(valor: YesNo) {
    const mudouValor = valor !== resposta.value
    onChange({ value: valor, nota: mudouValor ? '' : resposta.nota })
    if (valor !== followUpOn) {
      timeoutRef.current = window.setTimeout(onAvancar, ATRASO_AVANCO_MS)
    }
  }

  return (
    <Etapa
      overline={overline}
      titulo={pergunta}
      onVoltar={onVoltar}
      onContinuar={mostrarFollowUp ? onAvancar : undefined}
    >
      {aviso && (
        <p className="text-sm text-[var(--cor-texto-suave)] bg-[var(--cor-destaque-suave)] rounded-xl px-4 py-3 my-3 leading-relaxed">
          {aviso}
        </p>
      )}

      <div className="py-5 flex gap-3">
        <button
          type="button"
          onClick={() => escolher('sim')}
          aria-pressed={resposta.value === 'sim'}
          className={`flex-1 py-4 rounded-2xl text-base font-medium border transition-colors cursor-pointer ${
            resposta.value === 'sim'
              ? 'bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] border-[var(--cor-destaque)]'
              : 'border-[var(--cor-borda)] text-[var(--cor-texto)] hover:border-[var(--cor-destaque)]'
          }`}
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => escolher('nao')}
          aria-pressed={resposta.value === 'nao'}
          className={`flex-1 py-4 rounded-2xl text-base font-medium border transition-colors cursor-pointer ${
            resposta.value === 'nao'
              ? 'bg-[var(--cor-texto-suave)] text-[var(--cor-fundo-card)] border-[var(--cor-texto-suave)]'
              : 'border-[var(--cor-borda)] text-[var(--cor-texto)] hover:border-[var(--cor-texto-suave)]'
          }`}
        >
          Não
        </button>
      </div>

      {mostrarFollowUp && (
        <div className="pb-5">
          <label className="block text-sm text-[var(--cor-texto-suave)] mb-1">
            {followUpPrompt} <span className="italic">(campo opcional)</span>
          </label>
          <textarea
            value={resposta.nota}
            onChange={(e) => onChange({ nota: e.target.value })}
            rows={3}
            autoFocus
            className="w-full rounded-lg border border-[var(--cor-borda)] bg-[var(--cor-fundo)] p-2 text-sm text-[var(--cor-texto)] focus:outline-none focus:border-[var(--cor-destaque)]"
            placeholder="Se quiser, escreva aqui..."
          />
        </div>
      )}
    </Etapa>
  )
}
