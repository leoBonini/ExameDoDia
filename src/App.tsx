import { useState } from 'react'
import { ProgressBar } from './components/ProgressBar'
import { pecadosCapitais } from './content/pecadosCapitais'
import { useExame } from './state/useExame'
import { StepAgradecimento } from './steps/StepAgradecimento'
import { StepContricao } from './steps/StepContricao'
import { StepPecado } from './steps/StepPecado'
import { StepPlano } from './steps/StepPlano'
import { StepPresenca } from './steps/StepPresenca'
import { StepResumo } from './steps/StepResumo'
import { StepSeguranca } from './steps/StepSeguranca'

const TOTAL_ETAPAS = 1 + 1 + pecadosCapitais.length + 1 + 1 + 1 + 1

export default function App() {
  const [indice, setIndice] = useState(0)
  const {
    respostas,
    setPlano,
    setAngelus,
    setVividoPraticas,
    setPecado,
    setOutraCoisa,
    setAgradecimento,
    concluir,
    reiniciar,
  } = useExame()

  const avancar = () => setIndice((i) => Math.min(i + 1, TOTAL_ETAPAS - 1))
  const voltar = () => setIndice((i) => Math.max(i - 1, 0))

  const indicePrimeiroPecado = 2
  const indiceUltimoPecado = indicePrimeiroPecado + pecadosCapitais.length - 1
  const indiceSeguranca = indiceUltimoPecado + 1
  const indiceAgradecimento = indiceSeguranca + 1
  const indiceContricao = indiceAgradecimento + 1
  const indiceResumo = indiceContricao + 1

  let conteudo: React.ReactNode

  if (indice === 0) {
    conteudo = <StepPresenca onComecar={avancar} />
  } else if (indice === 1) {
    conteudo = (
      <StepPlano
        respostas={respostas}
        setPlano={setPlano}
        setAngelus={setAngelus}
        setVividoPraticas={setVividoPraticas}
        onVoltar={voltar}
        onContinuar={avancar}
      />
    )
  } else if (indice >= indicePrimeiroPecado && indice <= indiceUltimoPecado) {
    const pecado = pecadosCapitais[indice - indicePrimeiroPecado]
    conteudo = (
      <StepPecado
        pecado={pecado}
        respostas={respostas.pecados}
        setPecado={setPecado}
        onVoltar={voltar}
        onContinuar={avancar}
        primeiraVez={indice === indicePrimeiroPecado}
      />
    )
  } else if (indice === indiceSeguranca) {
    conteudo = (
      <StepSeguranca
        resposta={respostas.outraCoisa}
        onChange={setOutraCoisa}
        onVoltar={voltar}
        onContinuar={avancar}
      />
    )
  } else if (indice === indiceAgradecimento) {
    conteudo = (
      <StepAgradecimento
        valor={respostas.agradecimento}
        onChange={setAgradecimento}
        onVoltar={voltar}
        onContinuar={avancar}
      />
    )
  } else if (indice === indiceContricao) {
    conteudo = <StepContricao onVoltar={voltar} onContinuar={avancar} />
  } else {
    conteudo = (
      <StepResumo
        respostas={respostas}
        onVoltar={voltar}
        onConcluir={concluir}
        onReiniciar={() => {
          reiniciar()
          setIndice(0)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen">
      {indice > 0 && <ProgressBar atual={indice} total={indiceResumo + 1} />}
      {conteudo}
    </div>
  )
}
