import { Etapa } from '../components/Etapa'
import { atoDeContricao } from '../content/textos'

interface Props {
  onVoltar: () => void
  onContinuar: () => void
}

export function StepContricao({ onVoltar, onContinuar }: Props) {
  return (
    <Etapa
      titulo="Peça perdão a Deus"
      subtitulo="Termine seu exame na presença Dele, arrependido e confiante em sua misericórdia."
      onVoltar={onVoltar}
      onContinuar={onContinuar}
      textoContinuar="Ver meu resumo"
    >
      <div className="py-6">
        <p className="text-xs uppercase tracking-widest text-[var(--cor-texto-suave)] mb-2">
          Ato de Contrição
        </p>
        <blockquote className="italic leading-relaxed text-[var(--cor-texto)]">
          {atoDeContricao}
        </blockquote>
      </div>
    </Etapa>
  )
}
