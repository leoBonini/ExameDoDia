import { Etapa } from '../components/Etapa'
import { PerguntaSimNao } from '../components/PerguntaSimNao'
import { avisoMarcarSim } from '../content/textos'
import type { PecadoCapital, YesNoAnswer } from '../types'

interface Props {
  pecado: PecadoCapital
  respostas: Record<string, YesNoAnswer>
  setPecado: (id: string, resposta: Partial<YesNoAnswer>) => void
  onVoltar: () => void
  onContinuar: () => void
  primeiraVez: boolean
}

export function StepPecado({
  pecado,
  respostas,
  setPecado,
  onVoltar,
  onContinuar,
  primeiraVez,
}: Props) {
  return (
    <Etapa
      titulo={pecado.nome}
      subtitulo={pecado.subtitulo}
      onVoltar={onVoltar}
      onContinuar={onContinuar}
    >
      {primeiraVez && (
        <p className="text-sm text-[var(--cor-texto-suave)] bg-[var(--cor-destaque-suave)] rounded-xl px-4 py-3 my-3 leading-relaxed">
          {avisoMarcarSim}
        </p>
      )}
      {pecado.perguntas.map((pergunta) => (
        <PerguntaSimNao
          key={pergunta.id}
          texto={pergunta.texto}
          resposta={respostas[pergunta.id]}
          onChange={(r) => setPecado(pergunta.id, r)}
          followUpOn="sim"
          followUpPrompt="Quer contar mais? (onde, quando, com quem)"
        />
      ))}
    </Etapa>
  )
}
