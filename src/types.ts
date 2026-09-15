export type YesNo = 'sim' | 'nao' | null

export interface YesNoAnswer {
  value: YesNo
  nota: string
}

export interface Pergunta {
  id: string
  texto: string
}

export interface Secao {
  id: string
  titulo: string
  perguntas: Pergunta[]
}

export interface PecadoCapital {
  id: string
  nome: string
  subtitulo: string
  dica: string
  secoes: Secao[]
}

export interface ItemPlano {
  id: string
  titulo: string
  pergunta: string
  perguntaDomingo?: string
  followUpPrompt: string
}

/** Respostas do Ângelus: rezado em cada momento do dia. */
export interface AngelusAnswer {
  manha: boolean
  meiodia: boolean
  tarde: boolean
}

export interface ExameRespostas {
  data: string
  ehDomingo: boolean
  plano: Record<string, YesNoAnswer>
  angelus: AngelusAnswer
  vividoPraticas: string | null
  pecados: Record<string, YesNoAnswer>
  outraCoisa: YesNoAnswer
  agradecimento: string
  concluidoEm: string | null
}
