import { useState } from 'react'
import { ProgressBar } from './components/ProgressBar'
import { TelaEscolhaUnica } from './components/TelaEscolhaUnica'
import { TelaSimNao } from './components/TelaSimNao'
import { itensPlano, opcoesVividoPraticas } from './content/planoDeVida'
import { pecadosCapitais } from './content/pecadosCapitais'
import { avisoMarcarSim } from './content/textos'
import { useExame } from './state/useExame'
import { StepAgradecimento } from './steps/StepAgradecimento'
import { StepContricao } from './steps/StepContricao'
import { StepPresenca } from './steps/StepPresenca'
import { StepResumo } from './steps/StepResumo'
import type { ItemPlano, Pergunta, PecadoCapital } from './types'

type Tela =
  | { tipo: 'presenca' }
  | { tipo: 'pecado'; pecado: PecadoCapital; pergunta: Pergunta; aviso?: string }
  | { tipo: 'plano_item'; item: ItemPlano }
  | { tipo: 'vivido_praticas' }
  | { tipo: 'seguranca' }
  | { tipo: 'agradecimento' }
  | { tipo: 'contricao' }
  | { tipo: 'resumo' }

function construirTelas(): Tela[] {
  const telas: Tela[] = [{ tipo: 'presenca' }]

  pecadosCapitais.forEach((pecado, pi) => {
    pecado.perguntas.forEach((pergunta, qi) => {
      telas.push({
        tipo: 'pecado',
        pecado,
        pergunta,
        aviso: pi === 0 && qi === 0 ? avisoMarcarSim : undefined,
      })
    })
  })

  for (const item of itensPlano) telas.push({ tipo: 'plano_item', item })

  telas.push({ tipo: 'vivido_praticas' })
  telas.push({ tipo: 'seguranca' })
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
          aviso={tela.aviso}
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
