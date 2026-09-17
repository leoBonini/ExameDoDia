import type { ReactNode } from 'react'

interface Props {
  overline?: string
  titulo: string
  subtitulo?: string
  children: ReactNode
  onVoltar?: () => void
  onContinuar?: () => void
  textoContinuar?: string
  continuarDesabilitado?: boolean
}

export function Etapa({
  overline,
  titulo,
  subtitulo,
  children,
  onVoltar,
  onContinuar,
  textoContinuar = 'Continuar',
  continuarDesabilitado,
}: Props) {
  return (
    <div
      className={`max-w-xl mx-auto px-5 pt-5 ${onContinuar ? 'pb-28' : 'pb-10'}`}
    >
      {onVoltar && (
        <button
          type="button"
          onClick={onVoltar}
          aria-label="Voltar para a pergunta anterior"
          className="mb-4 w-9 h-9 flex items-center justify-center rounded-full border border-[var(--cor-borda)] text-[var(--cor-texto-suave)] cursor-pointer hover:border-[var(--cor-destaque)] hover:text-[var(--cor-destaque)]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <header className="mb-6">
        {overline && (
          <p className="uppercase tracking-[0.15em] text-xs text-[var(--cor-texto-suave)] mb-2">
            {overline}
          </p>
        )}
        <h1 className="text-2xl font-semibold text-[var(--cor-destaque)]">
          {titulo}
        </h1>
        {subtitulo && (
          <p className="mt-2 text-[var(--cor-texto-suave)] leading-relaxed">
            {subtitulo}
          </p>
        )}
      </header>

      <div className="bg-[var(--cor-fundo-card)] border border-[var(--cor-borda)] rounded-2xl px-5 py-2 shadow-sm">
        {children}
      </div>

      {onContinuar && (
        <div className="fixed bottom-0 left-0 right-0 bg-[var(--cor-fundo)]/95 backdrop-blur border-t border-[var(--cor-borda)]">
          <div className="max-w-xl mx-auto px-5 py-3">
            <button
              type="button"
              onClick={onContinuar}
              disabled={continuarDesabilitado}
              className="w-full px-5 py-2.5 rounded-full bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {textoContinuar}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
