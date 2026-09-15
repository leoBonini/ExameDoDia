import { Etapa } from '../components/Etapa'
import { PerguntaSimNao } from '../components/PerguntaSimNao'
import type { YesNoAnswer } from '../types'

interface Props {
  resposta: YesNoAnswer
  onChange: (resposta: Partial<YesNoAnswer>) => void
  onVoltar: () => void
  onContinuar: () => void
}

export function StepSeguranca({ resposta, onChange, onVoltar, onContinuar }: Props) {
  return (
    <Etapa
      titulo="Mais alguma coisa?"
      subtitulo="Os sete pecados capitais ajudam a organizar o exame, mas não esgotam toda a vida moral e espiritual."
      onVoltar={onVoltar}
      onContinuar={onContinuar}
    >
      <PerguntaSimNao
        texto="Há alguma outra coisa deste dia que pesa em sua consciência e não apareceu nas perguntas anteriores?"
        resposta={resposta}
        onChange={onChange}
        followUpOn="sim"
        followUpPrompt="O que aconteceu?"
      />
    </Etapa>
  )
}
