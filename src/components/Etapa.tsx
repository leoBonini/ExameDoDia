import type { ReactNode } from 'react'

interface Props {
  titulo: string
  subtitulo?: string
  children: ReactNode
  onVoltar?: () => void
  onContinuar?: () => void
  textoContinuar?: string
  continuarDesabilitado?: boolean
}

export function Etapa({
  titulo,
  subtitulo,
  children,
  onVoltar,
  onContinuar,
  textoContinuar = 'Continuar',
  continuarDesabilitado,
}: Props) {
  return (
    <div className="max-w-xl mx-auto px-5 pb-28 pt-8">
      <header className="mb-6">
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

      <div className="fixed bottom-0 left-0 right-0 bg-[var(--cor-fundo)]/95 backdrop-blur border-t border-[var(--cor-borda)]">
        <div className="max-w-xl mx-auto px-5 py-3 flex gap-3">
          {onVoltar && (
            <button
              type="button"
              onClick={onVoltar}
              className="px-5 py-2.5 rounded-full border border-[var(--cor-borda)] text-[var(--cor-texto-suave)] cursor-pointer hover:border-[var(--cor-destaque)]"
            >
              Voltar
            </button>
          )}
          {onContinuar && (
            <button
              type="button"
              onClick={onContinuar}
              disabled={continuarDesabilitado}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {textoContinuar}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
