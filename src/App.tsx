import { useState } from 'react'
import { ProgressBar } from './components/ProgressBar'
import { TelaEscolhaUnica } from './components/TelaEscolhaUnica'
import { TelaSimNao } from './components/TelaSimNao'
import { itensPlano, opcoesVividoPraticas } from './content/planoDeVida'
import { pecadosCapitais } from './content/pecadosCapitais'
import { useExame } from './state/useExame'
import { StepAgradecimento } from './steps/StepAgradecimento'
import { StepContricao } from './steps/StepContricao'
import { StepPresenca } from './steps/StepPresenca'
import { StepResumo } from './steps/StepResumo'
import type { ItemPlano, Pergunta, PecadoCapital } from './types'

type Tela =
  | { tipo: 'presenca' }
  | { tipo: 'pecado'; pecado: PecadoCapital; pergunta: Pergunta }
  | { tipo: 'plano_item'; item: ItemPlano }
  | { tipo: 'vivido_praticas' }
  | { tipo: 'seguranca' }
  | { tipo: 'ponto_positivo' }
  | { tipo: 'ponto_melhorar' }
  | { tipo: 'agradecimento' }
  | { tipo: 'contricao' }
  | { tipo: 'resumo' }

function construirTelas(): Tela[] {
  const telas: Tela[] = [{ tipo: 'presenca' }]

  for (const pecado of pecadosCapitais) {
    for (const pergunta of pecado.perguntas) {
      telas.push({ tipo: 'pecado', pecado, pergunta })
    }
  }

  for (const item of itensPlano) telas.push({ tipo: 'plano_item', item })

  telas.push({ tipo: 'vivido_praticas' })
  telas.push({ tipo: 'seguranca' })
  telas.push({ tipo: 'ponto_positivo' })
  telas.push({ tipo: 'ponto_melhorar' })
  telas.push({ tipo: 'agradecimento' })
  telas.push({ tipo: 'contricao' })
  telas.push({ tipo: 'resumo' })

  return telas
}

const telas = construirTelas()

export default function App() {
  const [indice, setIndice] = useState(0)
  const {
    respostas,
    setPlano,
    setVividoPraticas,
    setPecado,
    setOutraCoisa,
    setPontoPositivo,
    setPontoMelhorar,
    setAgradecimento,
    concluir,
    reiniciar,
  } = useExame()

  const avancar = () => setIndice((i) => Math.min(i + 1, telas.length - 1))
  const voltar = () => setIndice((i) => Math.max(i - 1, 0))

  const tela = telas[indice]

  let conteudo: React.ReactNode

  switch (tela.tipo) {
    case 'presenca':
      conteudo = <StepPresenca onComecar={avancar} />
      break

    case 'pecado':
      conteudo = (
        <TelaSimNao
          overline={tela.pecado.nome}
          pergunta={tela.pergunta.texto}
          resposta={respostas.pecados[tela.pergunta.id]}
          onChange={(r) => setPecado(tela.pergunta.id, r)}
          followUpOn="sim"
          followUpPrompt="Quer contar mais? (onde, quando, com quem)"
          onVoltar={voltar}
          onAvancar={avancar}
        />
      )
      break

    case 'plano_item': {
      const pergunta =
        tela.item.id === 'missa' && respostas.ehDomingo && tela.item.perguntaDomingo
          ? tela.item.perguntaDomingo
          : tela.item.pergunta
      conteudo = (
        <TelaSimNao
          overline="Plano de Vida Espiritual"
          pergunta={pergunta}
          resposta={respostas.plano[tela.item.id]}
          onChange={(r) => setPlano(tela.item.id, r)}
          followUpOn="nao"
          followUpPrompt={tela.item.followUpPrompt}
          onVoltar={voltar}
          onAvancar={avancar}
        />
      )
      break
    }

    case 'vivido_praticas':
      conteudo = (
        <TelaEscolhaUnica
          overline="Plano de Vida Espiritual"
          pergunta="Como você viveu suas práticas de piedade hoje?"
          opcoes={opcoesVividoPraticas}
          valor={respostas.vividoPraticas}
          onEscolher={setVividoPraticas}
          onVoltar={voltar}
          onAvancar={avancar}
        />
      )
      break

    case 'seguranca':
      conteudo = (
        <TelaSimNao
          overline="Revisão final"
          pergunta="Há alguma outra coisa deste dia que pesa em sua consciência e não apareceu nas perguntas anteriores?"
          resposta={respostas.outraCoisa}
          onChange={setOutraCoisa}
          followUpOn="sim"
          followUpPrompt="O que aconteceu?"
          onVoltar={voltar}
          onAvancar={avancar}
        />
      )
      break

    case 'ponto_positivo':
      conteudo = (
        <TelaSimNao
          overline="Revisão final"
          pergunta="Houve algum ponto do seu dia que você gostou especialmente e gostaria de continuar cultivando?"
          resposta={respostas.pontoPositivo}
          onChange={setPontoPositivo}
          followUpOn="sim"
          followUpPrompt="O que foi?"
          onVoltar={voltar}
          onAvancar={avancar}
        />
      )
      break

    case 'ponto_melhorar':
      conteudo = (
        <TelaSimNao
          overline="Revisão final"
          pergunta="Houve algo no seu dia que você não gostou e sente que poderia melhorar?"
          resposta={respostas.pontoMelhorar}
          onChange={setPontoMelhorar}
          followUpOn="sim"
          followUpPrompt="O que foi?"
          onVoltar={voltar}
          onAvancar={avancar}
        />
      )
      break

    case 'agradecimento':
      conteudo = (
        <StepAgradecimento
          valor={respostas.agradecimento}
          onChange={setAgradecimento}
          onVoltar={voltar}
          onContinuar={avancar}
        />
      )
      break

    case 'contricao':
      conteudo = <StepContricao onVoltar={voltar} onContinuar={avancar} />
      break

    case 'resumo':
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
      break
  }

  return (
    <div className="min-h-screen">
      {indice > 0 && <ProgressBar atual={indice} total={telas.length} />}
      {conteudo}
    </div>
  )
}
