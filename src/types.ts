export type YesNo = 'sim' | 'nao' | null

export interface YesNoAnswer {
  value: YesNo
  nota: string
}

export interface Pergunta {
  id: string
  texto: string
}

export interface PecadoCapital {
  id: string
  nome: string
  subtitulo: string
  dica: string
  perguntas: Pergunta[]
}

export interface ItemPlano {
  id: string
  titulo: string
  pergunta: string
  perguntaDomingo?: string
  followUpPrompt: string
}

export interface ExameRespostas {
  data: string
  ehDomingo: boolean
  plano: Record<string, YesNoAnswer>
  vividoPraticas: string | null
  pecados: Record<string, YesNoAnswer>
  outraCoisa: YesNoAnswer
  pontoPositivo: YesNoAnswer
  pontoMelhorar: YesNoAnswer
  agradecimento: string
  concluidoEm: string | null
}
