import type { PecadoCapital } from '../types'

export const pecadosCapitais: PecadoCapital[] = [
  {
    id: 'soberba',
    nome: 'Soberba',
    subtitulo: 'Orgulho, vaidade, superioridade, recusa de correção',
    dica: 'tente reconhecer erros com mais simplicidade, sem precisar se justificar de imediato',
    perguntas: [
      { id: 'soberba_1', texto: 'Você teve dificuldade de reconhecer que estava errado ou de pedir desculpas, seja por orgulho ou para não perder a razão?' },
      { id: 'soberba_2', texto: 'Você buscou elogios, se comparou com alguém ou tentou chamar atenção para algo que fez principalmente para ser admirado — no trabalho, nos estudos ou em conversas?' },
      { id: 'soberba_3', texto: 'Quando recebeu uma correção, você se recusou a considerá-la, ou teve dificuldade de reconhecer sinceramente o mérito de alguém?' },
      { id: 'soberba_4', texto: 'Você interrompeu, menosprezou ou tratou alguém com menos consideração por achar sua própria opinião mais importante?' },
      { id: 'soberba_5', texto: 'Diante de Deus, você teve resistência em agradecer ou em reconhecer suas limitações, atribuindo tudo ao próprio esforço?' },
    ],
  },
  {
    id: 'avareza',
    nome: 'Avareza',
    subtitulo: 'Apego desordenado aos bens e ao dinheiro',
    dica: 'observe se algum apego a dinheiro ou bens pesou mais que a caridade',
    perguntas: [
      { id: 'avareza_1', texto: 'Você teve dificuldade desproporcional de emprestar, dividir ou abrir mão de algo, seja dinheiro ou algum bem?' },
      { id: 'avareza_2', texto: 'Você ficou excessivamente preocupado em perder algum bem, ou desejou possuir alguma coisa de um jeito que dominou seus pensamentos?' },
      { id: 'avareza_3', texto: 'Você foi desonesto, buscou alguma vantagem injusta ou deixou de cumprir uma obrigação financeira que tinha condições de cumprir?' },
      { id: 'avareza_4', texto: 'Você percebeu uma necessidade concreta em que poderia ajudar — dinheiro, tempo ou algum bem — e recusou-se só por não querer abrir mão daquilo?' },
    ],
  },
  {
    id: 'luxuria',
    nome: 'Luxúria',
    subtitulo: 'Percepção, tentação, consentimento e ação são coisas diferentes',
    dica: 'preste atenção ao momento em que um olhar ou pensamento deixa de ser espontâneo e passa a ser escolhido',
    perguntas: [
      { id: 'luxuria_1', texto: 'Ao perceber alguém que despertou atração, você prolongou deliberadamente o olhar ou o pensamento com a intenção de obter prazer sexual?' },
      { id: 'luxuria_2', texto: 'Você procurou deliberadamente imagens, vídeos, perfis ou conteúdos para se estimular sexualmente?' },
      { id: 'luxuria_3', texto: 'Quando surgiu uma fantasia sexual, você escolheu desenvolvê-la ou evocou deliberadamente alguma imagem ou lembrança com essa finalidade?' },
      { id: 'luxuria_4', texto: 'Você falou, agiu ou incentivou alguém, ainda que só interiormente, de um jeito sexualmente desordenado?' },
      { id: 'luxuria_5', texto: 'Você se colocou deliberadamente numa situação que sabia, pela experiência, que provavelmente o levaria a uma queda?' },
    ],
  },
  {
    id: 'inveja',
    nome: 'Inveja',
    subtitulo: 'O incômodo diante do bem do outro enquanto bem do outro',
    dica: 'quando notar comparação ou ressentimento surgindo, tente nomeá-lo e pedir a graça de se alegrar com o bem alheio',
    perguntas: [
      { id: 'inveja_1', texto: 'Alguma conquista ou bem de outra pessoa incomodou você, ou você desejou que ela perdesse algo bom que tem?' },
      { id: 'inveja_2', texto: 'Você tentou diminuir uma conquista de alguém, ou falou mal de alguém depois de vê-lo receber reconhecimento?' },
      { id: 'inveja_3', texto: 'Você deixou de elogiar alguém, ou alimentou comparações que fizeram crescer ressentimento contra essa pessoa?' },
      { id: 'inveja_4', texto: 'Você se alegrou com o fracasso ou a dificuldade de alguém de quem tinha inveja?' },
    ],
  },
  {
    id: 'gula',
    nome: 'Gula',
    subtitulo: 'O prazer da comida e da bebida sem moderação',
    dica: 'ao perceber que já está satisfeito, tente parar naquele momento em vez de continuar só pelo prazer',
    perguntas: [
      { id: 'gula_1', texto: 'Em alguma refeição do dia, você continuou comendo — mesmo percebendo que já estava satisfeito — apenas pelo prazer de continuar?' },
      { id: 'gula_2', texto: 'Você colocou ou comeu uma quantidade claramente desproporcional de comida, ou desperdiçou comida por falta de moderação?' },
      { id: 'gula_3', texto: 'Fora das refeições, você ficou procurando comida repetidamente, sem fome, apenas pela vontade de comer?' },
      { id: 'gula_4', texto: 'Você bebeu de maneira excessiva, ou buscou deliberadamente perder o domínio de si por meio da bebida?' },
    ],
  },
  {
    id: 'ira',
    nome: 'Ira',
    subtitulo: 'Sentir raiva não é pecado; o exame olha para o que foi feito com ela',
    dica: 'da próxima vez que sentir raiva, tente dar um espaço antes de responder',
    perguntas: [
      { id: 'ira_1', texto: 'Você levantou a voz, respondeu agressivamente, insultou ou humilhou alguém porque estava irritado — seja em casa, no trabalho ou em qualquer conversa?' },
      { id: 'ira_2', texto: 'Você descontou sua irritação em alguém que não tinha culpa, ou foi desproporcionalmente impaciente diante de um erro pequeno?' },
      { id: 'ira_3', texto: 'Você usou o silêncio, o desprezo ou a indiferença deliberadamente para ferir alguém?' },
      { id: 'ira_4', texto: 'Depois de alguma situação, você continuou alimentando pensamentos de raiva ou vingança, ou desejou algum mal a alguém?' },
      { id: 'ira_5', texto: 'Você recusou um pedido sincero de desculpas, ou deixou de dar um passo razoável rumo à reconciliação por orgulho ou ressentimento?' },
    ],
  },
  {
    id: 'preguica',
    nome: 'Preguiça e acídia',
    subtitulo: 'Não confundir com cansaço, descanso necessário, doença ou limites legítimos',
    dica: 'escolha uma pequena obrigação adiada hoje e comece por ela amanhã, antes de qualquer distração',
    perguntas: [
      { id: 'preguica_1', texto: 'Você adiou ou fez de qualquer jeito uma obrigação importante, mesmo tendo condições razoáveis de cumpri-la bem — seja no trabalho, nos estudos ou em casa?' },
      { id: 'preguica_2', texto: 'Você perdeu tempo no celular, redes sociais ou entretenimento enquanto negligenciava algo que precisava fazer?' },
      { id: 'preguica_3', texto: 'Você transferiu para outra pessoa uma obrigação sua, ou deixou de ajudar alguém, só por não querer se esforçar?' },
      { id: 'preguica_4', texto: 'Você evitou rezar ou abandonou alguma prática espiritual assumida só por comodismo?' },
      { id: 'preguica_5', texto: 'Você percebeu uma oportunidade concreta de fazer o bem e deixou passar só porque daria trabalho?' },
      { id: 'preguica_6', texto: 'Você perdeu tempo com alguma coisa que sabia que não devia estar fazendo?' },
    ],
  },
]
