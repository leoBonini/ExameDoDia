import type { YesNo, YesNoAnswer } from '../types'

interface Props {
  texto: string
  resposta: YesNoAnswer
  onChange: (resposta: Partial<YesNoAnswer>) => void
  followUpOn: 'sim' | 'nao'
  followUpPrompt: string
}

export function PerguntaSimNao({
  texto,
  resposta,
  onChange,
  followUpOn,
  followUpPrompt,
}: Props) {
  const mostrarFollowUp = resposta.value === followUpOn

  function escolher(valor: YesNo) {
    if (resposta.value === valor) {
      onChange({ value: null, nota: '' })
    } else {
      onChange({ value: valor })
    }
  }

  return (
    <div className="py-4 border-b border-[var(--cor-borda)] last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[15px] leading-relaxed flex-1">{texto}</p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => escolher('sim')}
            aria-pressed={resposta.value === 'sim'}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
              resposta.value === 'sim'
                ? 'bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] border-[var(--cor-destaque)]'
                : 'border-[var(--cor-borda)] text-[var(--cor-texto-suave)] hover:border-[var(--cor-destaque)]'
            }`}
          >
            Sim
          </button>
          <button
            type="button"
            onClick={() => escolher('nao')}
            aria-pressed={resposta.value === 'nao'}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
              resposta.value === 'nao'
                ? 'bg-[var(--cor-texto-suave)] text-[var(--cor-fundo-card)] border-[var(--cor-texto-suave)]'
                : 'border-[var(--cor-borda)] text-[var(--cor-texto-suave)] hover:border-[var(--cor-texto-suave)]'
            }`}
          >
            Não
          </button>
        </div>
      </div>
      {mostrarFollowUp && (
        <div className="mt-3">
          <label className="block text-sm text-[var(--cor-texto-suave)] mb-1">
            {followUpPrompt}{' '}
            <span className="italic">(campo opcional)</span>
          </label>
          <textarea
            value={resposta.nota}
            onChange={(e) => onChange({ nota: e.target.value })}
            rows={2}
            className="w-full rounded-lg border border-[var(--cor-borda)] bg-[var(--cor-fundo)] p-2 text-sm text-[var(--cor-texto)] focus:outline-none focus:border-[var(--cor-destaque)]"
            placeholder="Se quiser, escreva aqui..."
          />
        </div>
      )}
    </div>
  )
}
