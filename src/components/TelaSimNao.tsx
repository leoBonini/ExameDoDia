import { useEffect, useRef } from 'react'
import { Etapa } from './Etapa'
import type { YesNo, YesNoAnswer } from '../types'

const ATRASO_AVANCO_MS = 150

interface Props {
  overline: string
  pergunta: string
  resposta: YesNoAnswer
  onChange: (resposta: Partial<YesNoAnswer>) => void
  followUpOn: 'sim' | 'nao'
  followUpPrompt: string
  onVoltar: () => void
  onAvancar: () => void
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
}: Props) {
  const timeoutRef = useRef<number | null>(null)
  // Nunca deveria vir undefined, mas se o progresso salvo for de uma
  // versão anterior do exame (pergunta nova, id renomeado), evita que
  // a tela quebre em vez de simplesmente tratar como ainda não respondida.
  const valorAtual = resposta?.value ?? null
  const notaAtual = resposta?.nota ?? ''
  const mostrarFollowUp = valorAtual === followUpOn

  function cancelarAvancoPendente() {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Cancela o avanço automático agendado se a pergunta mudar antes dele
  // disparar (ex.: usuário voltou pela seta antes do tempo passar).
  useEffect(() => cancelarAvancoPendente, [pergunta])

  function escolher(valor: YesNo) {
    cancelarAvancoPendente()
    const mudouValor = valor !== valorAtual
    onChange({ value: valor, nota: mudouValor ? '' : notaAtual })
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
      <div className="py-5 flex gap-3">
        <button
          type="button"
          onClick={() => escolher('sim')}
          aria-pressed={valorAtual === 'sim'}
          className={`flex-1 py-4 rounded-2xl text-base font-medium border transition-colors cursor-pointer ${
            valorAtual === 'sim'
              ? 'bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] border-[var(--cor-destaque)]'
              : 'border-[var(--cor-borda)] text-[var(--cor-texto)] hover:border-[var(--cor-destaque)]'
          }`}
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => escolher('nao')}
          aria-pressed={valorAtual === 'nao'}
          className={`flex-1 py-4 rounded-2xl text-base font-medium border transition-colors cursor-pointer ${
            valorAtual === 'nao'
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
            value={notaAtual}
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
