import { Etapa } from '../components/Etapa'
import { PerguntaSimNao } from '../components/PerguntaSimNao'
import { itensPlano, opcoesVividoPraticas } from '../content/planoDeVida'
import type { AngelusAnswer, ExameRespostas, YesNoAnswer } from '../types'

interface Props {
  respostas: ExameRespostas
  setPlano: (id: string, resposta: Partial<YesNoAnswer>) => void
  setAngelus: (angelus: AngelusAnswer) => void
  setVividoPraticas: (valor: string) => void
  onVoltar: () => void
  onContinuar: () => void
}

export function StepPlano({
  respostas,
  setPlano,
  setAngelus,
  setVividoPraticas,
  onVoltar,
  onContinuar,
}: Props) {
  function alternarAngelus(momento: keyof AngelusAnswer) {
    setAngelus({ ...respostas.angelus, [momento]: !respostas.angelus[momento] })
  }

  return (
    <Etapa
      titulo="Plano de Vida Espiritual"
      subtitulo="Antes de olhar para as faltas, verifique com simplicidade se conseguiu viver as práticas que se propôs. Deixar de cumprir uma prática pessoal não é, em si, pecado."
      onVoltar={onVoltar}
      onContinuar={onContinuar}
    >
      {itensPlano.map((item) => {
        if (item.id === 'missa') {
          return (
            <PerguntaSimNao
              key={item.id}
              texto={
                respostas.ehDomingo && item.perguntaDomingo
                  ? item.perguntaDomingo
                  : item.pergunta
              }
              resposta={respostas.plano[item.id]}
              onChange={(r) => setPlano(item.id, r)}
              followUpOn="nao"
              followUpPrompt={item.followUpPrompt}
            />
          )
        }
        return (
          <PerguntaSimNao
            key={item.id}
            texto={item.pergunta}
            resposta={respostas.plano[item.id]}
            onChange={(r) => setPlano(item.id, r)}
            followUpOn="nao"
            followUpPrompt={item.followUpPrompt}
          />
        )
      })}

      <div className="py-4">
        <p className="text-[15px] leading-relaxed mb-3">
          Você rezou o Angelus? <span className="text-[var(--cor-texto-suave)] text-sm">(marque os momentos em que rezou)</span>
        </p>
        <div className="flex gap-2 flex-wrap">
          {(
            [
              ['manha', 'Manhã'],
              ['meiodia', 'Meio-dia'],
              ['tarde', 'Tarde'],
            ] as const
          ).map(([momento, rotulo]) => (
            <button
              key={momento}
              type="button"
              onClick={() => alternarAngelus(momento)}
              aria-pressed={respostas.angelus[momento]}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
                respostas.angelus[momento]
                  ? 'bg-[var(--cor-destaque)] text-[var(--cor-fundo-card)] border-[var(--cor-destaque)]'
                  : 'border-[var(--cor-borda)] text-[var(--cor-texto-suave)] hover:border-[var(--cor-destaque)]'
              }`}
            >
              {rotulo} {respostas.angelus[momento] ? '✓' : ''}
            </button>
          ))}
        </div>
      </div>

      <div className="py-4 border-t border-[var(--cor-borda)]">
        <p className="text-[15px] leading-relaxed mb-3">
          Como você viveu suas práticas de piedade hoje?
        </p>
        <div className="flex flex-col gap-2">
          {opcoesVividoPraticas.map((opcao) => (
            <button
              key={opcao}
              type="button"
              onClick={() => setVividoPraticas(opcao)}
              aria-pressed={respostas.vividoPraticas === opcao}
              className={`text-left px-4 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                respostas.vividoPraticas === opcao
                  ? 'bg-[var(--cor-destaque-suave)] border-[var(--cor-destaque)]'
                  : 'border-[var(--cor-borda)] hover:border-[var(--cor-destaque)]'
              }`}
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>
    </Etapa>
  )
}
