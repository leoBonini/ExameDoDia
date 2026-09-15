import { introducaoPresenca, oracaoInicial } from '../content/textos'

interface Props {
  onComecar: () => void
}

export function StepPresenca({ onComecar }: Props) {
  return (
    <div className="max-w-xl mx-auto px-5 pt-16 pb-10 flex flex-col items-center text-center min-h-[85vh] justify-center">
      <p className="uppercase tracking-[0.2em] text-xs text-[var(--cor-texto-suave)] mb-3">
        Exame diário de consciência
      </p>
      <h1 className="text-2xl font-semibold text-[var(--cor-destaque)] mb-5">
        Coloque-se na presença de Deus
      </h1>
      <p className="text-[var(--cor-texto)] leading-relaxed mb-8">
        {introducaoPresenca}
      </p>
      <blockquote className="italic text-[var(--cor-texto-suave)] border-l-2 border-[var(--cor-destaque)] pl-4 mb-10 text-left">
        {oracaoInicial}
      </blockquote>
      <button
        type="button"
        onClick={onComecar}
        className="px-8 py-3 rounded-full bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] font-medium cursor-pointer"
      >
        Começar meu exame
      </button>
    </div>
  )
}
