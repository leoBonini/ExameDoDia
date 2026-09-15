import { Etapa } from '../components/Etapa'

interface Props {
  valor: string
  onChange: (texto: string) => void
  onVoltar: () => void
  onContinuar: () => void
}

export function StepAgradecimento({ valor, onChange, onVoltar, onContinuar }: Props) {
  return (
    <Etapa
      titulo="Agradecimento"
      subtitulo="O exame não termina olhando apenas para o que deu errado."
      onVoltar={onVoltar}
      onContinuar={onContinuar}
    >
      <div className="py-4">
        <p className="text-[15px] leading-relaxed mb-3">
          Pelo que você gostaria de agradecer especialmente a Deus hoje?
        </p>
        <textarea
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          placeholder="Ex.: pela conversa que tive com meu pai, pela Missa, por ter conseguido controlar minha irritação..."
          className="w-full rounded-lg border border-[var(--cor-borda)] bg-[var(--cor-fundo)] p-3 text-sm text-[var(--cor-texto)] focus:outline-none focus:border-[var(--cor-destaque)]"
        />
      </div>
    </Etapa>
  )
}
