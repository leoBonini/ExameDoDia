import { itensPlano } from './planoDeVida'
import { pecadosCapitais } from './pecadosCapitais'
import type { ExameRespostas } from '../types'

export interface ResumoPecado {
  id: string
  nome: string
  simCount: number
  totalPerguntas: number
}

export interface Resumo {
  porPecado: ResumoPecado[]
  destaque: ResumoPecado | null
  mensagemDestaque: string
  faltasPlano: string[]
  totalSim: number
}

function contarSimPorPecado(respostas: ExameRespostas): ResumoPecado[] {
  return pecadosCapitais.map((pecado) => {
    const simCount = pecado.perguntas.filter(
      (p) => respostas.pecados[p.id]?.value === 'sim',
    ).length
    return {
      id: pecado.id,
      nome: pecado.nome,
      simCount,
      totalPerguntas: pecado.perguntas.length,
    }
  })
}

function faltasDoPlano(respostas: ExameRespostas): string[] {
  return itensPlano
    .filter((item) => respostas.plano[item.id]?.value === 'nao')
    .map((item) => item.titulo)
}

export function gerarResumo(respostas: ExameRespostas): Resumo {
  const porPecado = contarSimPorPecado(respostas)
  const totalSim = porPecado.reduce((acc, p) => acc + p.simCount, 0)

  const destaque = porPecado.reduce<ResumoPecado | null>((maior, atual) => {
    if (atual.simCount === 0) return maior
    if (!maior || atual.simCount > maior.simCount) return atual
    return maior
  }, null)

  let mensagemDestaque: string
  if (!destaque) {
    mensagemDestaque =
      'Hoje suas respostas não apontaram um padrão que se destaque especialmente. Continue perseverando com atenção e gratidão.'
  } else {
    const pecado = pecadosCapitais.find((p) => p.id === destaque.id)!
    mensagemDestaque = `Hoje, ${pecado.nome.toLowerCase()} apareceu com mais frequência nas suas respostas. Amanhã, ${pecado.dica}.`
  }

  return {
    porPecado,
    destaque,
    mensagemDestaque,
    faltasPlano: faltasDoPlano(respostas),
    totalSim,
  }
}
