import type { PecadoCapital } from '../types'

export const pecadosCapitais: PecadoCapital[] = [
  {
    id: 'soberba',
    nome: 'Soberba',
    subtitulo: 'Orgulho, vaidade, superioridade, recusa de correção',
    dica:
      'tente reconhecer erros com mais simplicidade, sem precisar se justificar de imediato',
    secoes: [
      {
        id: 'soberba_geral',
        titulo: 'Geral',
        perguntas: [
          { id: 'soberba_geral_1', texto: 'Você teve dificuldade de reconhecer que estava errado?' },
          { id: 'soberba_geral_2', texto: 'Você deixou de pedir desculpas por orgulho?' },
          { id: 'soberba_geral_3', texto: 'Você tentou se justificar imediatamente quando percebeu uma falha?' },
          { id: 'soberba_geral_4', texto: 'Você se comparou com alguém para se sentir superior?' },
        ],
      },
      {
        id: 'soberba_trabalho',
        titulo: 'Trabalho ou estudo',
        perguntas: [
          { id: 'soberba_trabalho_1', texto: 'Você buscou elogios ou reconhecimento de maneira desordenada?' },
          { id: 'soberba_trabalho_2', texto: 'Você tentou chamar atenção para algo que fez principalmente para ser admirado?' },
          { id: 'soberba_trabalho_3', texto: 'Você tomou para si um mérito que também pertencia a outras pessoas?' },
          { id: 'soberba_trabalho_4', texto: 'Você menosprezou o trabalho ou a capacidade de alguém?' },
          { id: 'soberba_trabalho_5', texto: 'Quando recebeu uma correção, recusou-se a considerá-la simplesmente porque feriu seu orgulho?' },
        ],
      },
      {
        id: 'soberba_pessoas',
        titulo: 'Trato com as pessoas',
        perguntas: [
          { id: 'soberba_pessoas_1', texto: 'Você interrompeu alguém porque considerava sua própria opinião mais importante?' },
          { id: 'soberba_pessoas_2', texto: 'Você tentou demonstrar conhecimento principalmente para parecer superior?' },
          { id: 'soberba_pessoas_3', texto: 'Você tratou alguém com menos consideração por considerá-lo menos importante?' },
          { id: 'soberba_pessoas_4', texto: 'Você teve dificuldade de reconhecer sinceramente uma qualidade ou conquista de alguém?' },
        ],
      },
      {
        id: 'soberba_deus',
        titulo: 'Diante de Deus',
        perguntas: [
          { id: 'soberba_deus_1', texto: 'Você deixou de agradecer por algum bem porque atribuiu tudo somente ao próprio esforço?' },
          { id: 'soberba_deus_2', texto: 'Você teve resistência em reconhecer suas limitações ou necessidade da ajuda de Deus?' },
        ],
      },
    ],
  },
  {
    id: 'avareza',
    nome: 'Avareza',
    subtitulo: 'Apego desordenado aos bens e ao dinheiro',
    dica: 'observe se algum apego a dinheiro ou bens pesou mais que a caridade',
    secoes: [
      {
        id: 'avareza_dinheiro',
        titulo: 'Dinheiro',
        perguntas: [
          { id: 'avareza_dinheiro_1', texto: 'Você deixou de ajudar alguém que razoavelmente poderia ajudar apenas por apego ao dinheiro?' },
          { id: 'avareza_dinheiro_2', texto: 'Você foi desonesto em alguma questão financeira?' },
          { id: 'avareza_dinheiro_3', texto: 'Você deixou deliberadamente de cumprir uma obrigação financeira que tinha condições de cumprir?' },
          { id: 'avareza_dinheiro_4', texto: 'Você tentou obter alguma vantagem injusta envolvendo dinheiro?' },
        ],
      },
      {
        id: 'avareza_bens',
        titulo: 'Bens',
        perguntas: [
          { id: 'avareza_bens_1', texto: 'Você teve dificuldade desproporcional de emprestar ou dividir alguma coisa?' },
          { id: 'avareza_bens_2', texto: 'Você ficou excessivamente preocupado com a possibilidade de perder algum bem?' },
          { id: 'avareza_bens_3', texto: 'Você desejou possuir alguma coisa de maneira tão intensa que isso dominou seus pensamentos ou decisões?' },
        ],
      },
      {
        id: 'avareza_generosidade',
        titulo: 'Generosidade',
        perguntas: [
          { id: 'avareza_generosidade_1', texto: 'Você percebeu uma necessidade concreta em que poderia razoavelmente ajudar e recusou-se simplesmente porque não queria abrir mão de algo?' },
        ],
      },
    ],
  },
  {
    id: 'luxuria',
    nome: 'Luxúria',
    subtitulo: 'Percepção, tentação, consentimento e ação são coisas diferentes',
    dica:
      'preste atenção ao momento em que um olhar ou pensamento deixa de ser espontâneo e passa a ser escolhido',
    secoes: [
      {
        id: 'luxuria_olhar',
        titulo: 'Olhar',
        perguntas: [
          { id: 'luxuria_olhar_1', texto: 'Ao perceber alguém que despertou atração, você voltou deliberadamente o olhar com a intenção de obter prazer sexual?' },
          { id: 'luxuria_olhar_2', texto: 'Você prolongou voluntariamente um olhar porque queria alimentar aquele desejo?' },
          { id: 'luxuria_olhar_3', texto: 'Você procurou deliberadamente imagens, vídeos, perfis ou conteúdos para estimular sexualmente a si mesmo?' },
        ],
      },
      {
        id: 'luxuria_pensamentos',
        titulo: 'Pensamentos',
        perguntas: [
          { id: 'luxuria_pensamentos_1', texto: 'Quando surgiu espontaneamente uma fantasia sexual, você escolheu desenvolvê-la ou prolongá-la?' },
          { id: 'luxuria_pensamentos_2', texto: 'Você evocou deliberadamente alguma imagem, lembrança ou fantasia com essa finalidade?' },
        ],
      },
      {
        id: 'luxuria_outros',
        titulo: 'Outras pessoas',
        perguntas: [
          { id: 'luxuria_outros_1', texto: 'Você falou ou agiu deliberadamente de determinada maneira para provocar sensualidade em outra pessoa?' },
          { id: 'luxuria_outros_2', texto: 'Você utilizou alguém, ainda que interiormente, principalmente como objeto de satisfação sexual?' },
          { id: 'luxuria_outros_3', texto: 'Você incentivou deliberadamente outra pessoa a participar de algo que considerava sexualmente desordenado?' },
        ],
      },
      {
        id: 'luxuria_ocasioes',
        titulo: 'Ocasiões',
        perguntas: [
          { id: 'luxuria_ocasioes_1', texto: 'Você se colocou deliberadamente numa situação que sabia, pela experiência, que provavelmente o levaria a uma queda?' },
        ],
      },
    ],
  },
  {
    id: 'inveja',
    nome: 'Inveja',
    subtitulo: 'O incômodo diante do bem do outro enquanto bem do outro',
    dica: 'quando notar comparação ou ressentimento surgindo, tente nomeá-lo e pedir a graça de se alegrar com o bem alheio',
    secoes: [
      {
        id: 'inveja_geral',
        titulo: 'Geral',
        perguntas: [
          { id: 'inveja_geral_1', texto: 'Alguma conquista de outra pessoa incomodou você justamente porque foi ela quem conseguiu?' },
          { id: 'inveja_geral_2', texto: 'Você desejou que alguém perdesse alguma coisa boa que possui?' },
          { id: 'inveja_geral_3', texto: 'Você tentou diminuir uma conquista de alguém?' },
          { id: 'inveja_geral_4', texto: 'Você deixou de elogiar alguém porque reconhecer seu mérito feria seu orgulho?' },
          { id: 'inveja_geral_5', texto: 'Você falou mal de alguém para diminuir sua imagem depois de vê-lo receber reconhecimento?' },
          { id: 'inveja_geral_6', texto: 'Você alimentou comparações que fizeram crescer ressentimento contra aquela pessoa?' },
          { id: 'inveja_geral_7', texto: 'Você se alegrou com o fracasso ou dificuldade de alguém de quem tinha inveja?' },
        ],
      },
    ],
  },
  {
    id: 'gula',
    nome: 'Gula',
    subtitulo: 'O prazer da comida e da bebida sem moderação',
    dica: 'ao perceber que já está satisfeito, tente parar naquele momento em vez de continuar só pelo prazer',
    secoes: [
      {
        id: 'gula_cafe',
        titulo: 'Café da manhã',
        perguntas: [
          { id: 'gula_cafe_1', texto: 'Você comeu uma quantidade claramente desproporcional simplesmente pelo prazer de continuar comendo?' },
          { id: 'gula_cafe_2', texto: 'Mesmo percebendo estar satisfeito, continuou comendo sem uma razão proporcional?' },
        ],
      },
      {
        id: 'gula_refeicoes',
        titulo: 'Almoço e jantar',
        perguntas: [
          { id: 'gula_refeicoes_1', texto: 'Você colocou deliberadamente uma quantidade excessiva de comida?' },
          { id: 'gula_refeicoes_2', texto: 'Você repetiu apenas pelo desejo de continuar sentindo o prazer da comida, embora já estivesse satisfeito?' },
          { id: 'gula_refeicoes_3', texto: 'Você desperdiçou comida por falta de moderação ou cuidado?' },
        ],
      },
      {
        id: 'gula_dia',
        titulo: 'Durante o dia',
        perguntas: [
          { id: 'gula_dia_1', texto: 'Você comeu repetidamente sem fome simplesmente para satisfazer uma vontade?' },
          { id: 'gula_dia_2', texto: 'Você ficou procurando comida várias vezes apenas pelo prazer de comer?' },
          { id: 'gula_dia_3', texto: 'Você percebeu que deveria parar e deliberadamente decidiu continuar simplesmente para prolongar o prazer?' },
        ],
      },
      {
        id: 'gula_bebida',
        titulo: 'Bebida',
        perguntas: [
          { id: 'gula_bebida_1', texto: 'Você bebeu de maneira excessiva?' },
          { id: 'gula_bebida_2', texto: 'Você deliberadamente procurou perder o domínio de si por meio da bebida?' },
        ],
      },
    ],
  },
  {
    id: 'ira',
    nome: 'Ira',
    subtitulo: 'Sentir raiva não é pecado; o exame olha para o que foi feito com ela',
    dica: 'da próxima vez que sentir raiva, tente dar um espaço antes de responder',
    secoes: [
      {
        id: 'ira_conversas',
        titulo: 'Conversas',
        perguntas: [
          { id: 'ira_conversas_1', texto: 'Você levantou a voz desnecessariamente?' },
          { id: 'ira_conversas_2', texto: 'Você respondeu agressivamente porque estava irritado?' },
          { id: 'ira_conversas_3', texto: 'Você insultou alguém?' },
          { id: 'ira_conversas_4', texto: 'Você humilhou ou ridicularizou alguém?' },
        ],
      },
      {
        id: 'ira_familia',
        titulo: 'Família e relacionamento',
        perguntas: [
          { id: 'ira_familia_1', texto: 'Você descontou sua irritação em alguém que não tinha culpa?' },
          { id: 'ira_familia_2', texto: 'Você foi desproporcionalmente impaciente diante de um erro pequeno?' },
          { id: 'ira_familia_3', texto: 'Você utilizou o silêncio, desprezo ou indiferença deliberadamente para ferir alguém?' },
        ],
      },
      {
        id: 'ira_interior',
        titulo: 'Interiormente',
        perguntas: [
          { id: 'ira_interior_1', texto: 'Depois de uma discussão, você escolheu continuar alimentando pensamentos de vingança?' },
          { id: 'ira_interior_2', texto: 'Você deliberadamente desejou algum mal a alguém?' },
          { id: 'ira_interior_3', texto: 'Você ficou repetindo mentalmente uma ofensa apenas para alimentar sua raiva?' },
        ],
      },
      {
        id: 'ira_reconciliacao',
        titulo: 'Reconciliação',
        perguntas: [
          { id: 'ira_reconciliacao_1', texto: 'Você recusou um pedido sincero de desculpas por orgulho ou ressentimento?' },
          { id: 'ira_reconciliacao_2', texto: 'Você deixou de dar algum passo razoável em direção à reconciliação simplesmente porque queria continuar ressentido?' },
        ],
      },
    ],
  },
  {
    id: 'preguica',
    nome: 'Preguiça e acídia',
    subtitulo: 'Não confundir com cansaço, descanso necessário, doença ou limites legítimos',
    dica: 'escolha uma pequena obrigação adiada hoje e comece por ela amanhã, antes de qualquer distração',
    secoes: [
      {
        id: 'preguica_trabalho',
        titulo: 'Trabalho/estudo',
        perguntas: [
          { id: 'preguica_trabalho_1', texto: 'Você adiou uma obrigação importante apesar de ter condições razoáveis de realizá-la?' },
          { id: 'preguica_trabalho_2', texto: 'Você deixou uma tarefa necessária para ficar desnecessariamente no celular?' },
          { id: 'preguica_trabalho_3', texto: 'Você fez uma responsabilidade de qualquer jeito apenas para se livrar dela?' },
          { id: 'preguica_trabalho_4', texto: 'Você transferiu para alguém uma obrigação sua simplesmente porque não queria se esforçar?' },
        ],
      },
      {
        id: 'preguica_tempo',
        titulo: 'Tempo',
        perguntas: [
          { id: 'preguica_tempo_1', texto: 'Você percebeu que estava desperdiçando uma quantidade significativa de tempo e deliberadamente continuou?' },
          { id: 'preguica_tempo_2', texto: 'Você permaneceu excessivamente nas redes sociais, vídeos ou entretenimento enquanto negligenciava algo que precisava fazer?' },
        ],
      },
      {
        id: 'preguica_deveres',
        titulo: 'Deveres com os outros',
        perguntas: [
          { id: 'preguica_deveres_1', texto: 'Você deixou de ajudar alguém simplesmente por comodismo?' },
          { id: 'preguica_deveres_2', texto: 'Você deixou outra pessoa sobrecarregada porque não quis fazer sua parte?' },
        ],
      },
      {
        id: 'preguica_espiritual',
        titulo: 'Vida espiritual',
        perguntas: [
          { id: 'preguica_espiritual_1', texto: 'Você abandonou deliberadamente uma prática espiritual assumida apenas porque não queria fazer o esforço?' },
          { id: 'preguica_espiritual_2', texto: 'Você evitou rezar simplesmente por comodismo?' },
          { id: 'preguica_espiritual_3', texto: 'Você percebeu uma oportunidade concreta de fazer o bem e deixou passar apenas porque daria trabalho?' },
        ],
      },
    ],
  },
]
