import { Etapa } from '../components/Etapa'
import { gerarResumo } from '../content/resumo'
import type { ExameRespostas } from '../types'

interface Props {
  respostas: ExameRespostas
  onVoltar: () => void
  onConcluir: () => void
  onReiniciar: () => void
}

export function StepResumo({ respostas, onVoltar, onConcluir, onReiniciar }: Props) {
  const resumo = gerarResumo(respostas)
  const jaConcluido = respostas.concluidoEm !== null

  return (
    <Etapa
      titulo="Resumo do seu dia"
      subtitulo={
        jaConcluido
          ? 'Seu exame de hoje já foi concluído. Que Deus abençoe seu descanso.'
          : 'Antes de encerrar, veja um breve retrato do seu dia.'
      }
      onVoltar={jaConcluido ? undefined : onVoltar}
      onContinuar={jaConcluido ? onReiniciar : onConcluir}
      textoContinuar={jaConcluido ? 'Refazer o exame de hoje' : 'Concluir exame de hoje'}
    >
      <div className="py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--cor-texto-suave)] mb-2">
          Para amanhã
        </h2>
        <p className="leading-relaxed">{resumo.mensagemDestaque}</p>
      </div>

      {resumo.faltasPlano.length > 0 && (
        <div className="py-4 border-t border-[var(--cor-borda)]">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--cor-texto-suave)] mb-2">
            Plano de vida espiritual
          </h2>
          <p className="leading-relaxed text-[var(--cor-texto-suave)] text-sm mb-2">
            Práticas que não aconteceram hoje (lembre-se: isso não é, em si, pecado):
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed">
            {resumo.faltasPlano.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="py-4 border-t border-[var(--cor-borda)]">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--cor-texto-suave)] mb-2">
          Panorama por área
        </h2>
        <ul className="space-y-1.5 text-sm">
          {resumo.porPecado.map((p) => (
            <li key={p.id} className="flex justify-between">
              <span>{p.nome}</span>
              <span className="text-[var(--cor-texto-suave)]">
                {p.simCount} de {p.totalPerguntas}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {respostas.pontoPositivo.value === 'sim' && respostas.pontoPositivo.nota.trim() && (
        <div className="py-4 border-t border-[var(--cor-borda)]">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--cor-texto-suave)] mb-2">
            Ponto que você gostou
          </h2>
          <p className="italic leading-relaxed">{respostas.pontoPositivo.nota}</p>
        </div>
      )}

      {respostas.pontoMelhorar.value === 'sim' && respostas.pontoMelhorar.nota.trim() && (
        <div className="py-4 border-t border-[var(--cor-borda)]">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--cor-texto-suave)] mb-2">
            Ponto para melhorar
          </h2>
          <p className="italic leading-relaxed">{respostas.pontoMelhorar.nota}</p>
        </div>
      )}

      {respostas.agradecimento.trim() && (
        <div className="py-4 border-t border-[var(--cor-borda)]">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--cor-texto-suave)] mb-2">
            Você agradeceu por
          </h2>
          <p className="italic leading-relaxed">{respostas.agradecimento}</p>
        </div>
      )}
    </Etapa>
  )
}
