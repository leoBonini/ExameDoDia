import type { ItemPlano } from '../types'

export const itensPlano: ItemPlano[] = [
  {
    id: 'oracao_manha',
    titulo: 'Oração da manhã',
    pergunta: 'Você fez sua oração da manhã?',
    followUpPrompt: 'O que aconteceu?',
  },
  {
    id: 'leitura_evangelho',
    titulo: 'Leitura do Evangelho',
    pergunta: 'Você leu o Evangelho previsto para hoje?',
    followUpPrompt: 'Por que não conseguiu fazer?',
  },
  {
    id: 'missa',
    titulo: 'Santa Missa',
    pergunta: 'Você participou da Santa Missa hoje?',
    perguntaDomingo:
      'Hoje é domingo (dia de preceito). Você participou da Santa Missa?',
    followUpPrompt: 'Houve algum impedimento ou o que fez você não ir?',
  },
  {
    id: 'oracao_tarde',
    titulo: 'Oração da tarde',
    pergunta: 'Você fez sua oração da tarde?',
    followUpPrompt: 'O que aconteceu?',
  },
  {
    id: 'leitura_nt',
    titulo: 'Leitura do Novo Testamento',
    pergunta: 'Você fez sua leitura prevista do Novo Testamento?',
    followUpPrompt: 'Por que não conseguiu?',
  },
  {
    id: 'terco',
    titulo: 'Santo Terço',
    pergunta: 'Você rezou o Terço hoje?',
    followUpPrompt: 'O que aconteceu?',
  },
  {
    id: 'visita_santissimo',
    titulo: 'Visita ao Santíssimo',
    pergunta: 'Você fez sua visita ao Santíssimo Sacramento hoje?',
    followUpPrompt: 'Houve algum impedimento ou o que fez você não conseguir?',
  },
]

export const opcoesVividoPraticas = [
  'Com atenção e presença',
  'Com algumas distrações',
  'Muito distraído',
  'Fiz algumas apenas para cumprir',
]
