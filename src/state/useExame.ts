import { useCallback, useEffect, useState } from 'react'
import { itensPlano } from '../content/planoDeVida'
import { pecadosCapitais } from '../content/pecadosCapitais'
import type { AngelusAnswer, ExameRespostas, YesNoAnswer } from '../types'

const CHAVE_ATUAL = 'exame-do-dia:atual'
const CHAVE_HISTORICO = 'exame-do-dia:historico'

function hojeISO(): string {
  const d = new Date()
  const offset = d.getTimezoneOffset()
  const local = new Date(d.getTime() - offset * 60 * 1000)
  return local.toISOString().slice(0, 10)
}

function respostaVazia(): YesNoAnswer {
  return { value: null, nota: '' }
}

export function criarExameVazio(): ExameRespostas {
  const plano: Record<string, YesNoAnswer> = {}
  for (const item of itensPlano) plano[item.id] = respostaVazia()

  const pecados: Record<string, YesNoAnswer> = {}
  for (const pecado of pecadosCapitais) {
    for (const pergunta of pecado.perguntas) {
      pecados[pergunta.id] = respostaVazia()
    }
  }

  return {
    data: hojeISO(),
    ehDomingo: new Date().getDay() === 0,
    plano,
    angelus: { manha: false, meiodia: false, tarde: false },
    vividoPraticas: null,
    pecados,
    outraCoisa: respostaVazia(),
    agradecimento: '',
    concluidoEm: null,
  }
}

function carregarAtual(): ExameRespostas {
  try {
    const bruto = localStorage.getItem(CHAVE_ATUAL)
    if (!bruto) return criarExameVazio()
    const salvo = JSON.parse(bruto) as ExameRespostas
    if (salvo.data !== hojeISO()) return criarExameVazio()
    return salvo
  } catch {
    return criarExameVazio()
  }
}

export function carregarHistorico(): ExameRespostas[] {
  try {
    const bruto = localStorage.getItem(CHAVE_HISTORICO)
    if (!bruto) return []
    return JSON.parse(bruto) as ExameRespostas[]
  } catch {
    return []
  }
}

export function useExame() {
  const [respostas, setRespostas] = useState<ExameRespostas>(carregarAtual)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_ATUAL, JSON.stringify(respostas))
    } catch {
      // localStorage indisponível (ex.: modo privado); progresso fica só em memória.
    }
  }, [respostas])

  const setPlano = useCallback((id: string, resposta: Partial<YesNoAnswer>) => {
    setRespostas((prev) => ({
      ...prev,
      plano: { ...prev.plano, [id]: { ...prev.plano[id], ...resposta } },
    }))
  }, [])

  const setAngelus = useCallback((angelus: AngelusAnswer) => {
    setRespostas((prev) => ({ ...prev, angelus }))
  }, [])

  const setVividoPraticas = useCallback((valor: string) => {
    setRespostas((prev) => ({ ...prev, vividoPraticas: valor }))
  }, [])

  const setPecado = useCallback((id: string, resposta: Partial<YesNoAnswer>) => {
    setRespostas((prev) => ({
      ...prev,
      pecados: { ...prev.pecados, [id]: { ...prev.pecados[id], ...resposta } },
    }))
  }, [])

  const setOutraCoisa = useCallback((resposta: Partial<YesNoAnswer>) => {
    setRespostas((prev) => ({
      ...prev,
      outraCoisa: { ...prev.outraCoisa, ...resposta },
    }))
  }, [])

  const setAgradecimento = useCallback((texto: string) => {
    setRespostas((prev) => ({ ...prev, agradecimento: texto }))
  }, [])

  const concluir = useCallback(() => {
    setRespostas((prev) => {
      const finalizado: ExameRespostas = {
        ...prev,
        concluidoEm: new Date().toISOString(),
      }
      try {
        const historico = carregarHistorico().filter(
          (e) => e.data !== finalizado.data,
        )
        historico.unshift(finalizado)
        localStorage.setItem(
          CHAVE_HISTORICO,
          JSON.stringify(historico.slice(0, 60)),
        )
      } catch {
        // segue sem histórico persistido se o storage falhar
      }
      return finalizado
    })
  }, [])

  const reiniciar = useCallback(() => {
    const novo = criarExameVazio()
    setRespostas(novo)
    try {
      localStorage.setItem(CHAVE_ATUAL, JSON.stringify(novo))
    } catch {
      // ignora
    }
  }, [])

  return {
    respostas,
    setPlano,
    setAngelus,
    setVividoPraticas,
    setPecado,
    setOutraCoisa,
    setAgradecimento,
    concluir,
    reiniciar,
  }
}
