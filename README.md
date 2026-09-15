# Exame do Dia

Exame diário de consciência para ser feito à noite, antes de dormir. Não substitui o exame mais aprofundado feito antes da Confissão, mas ajuda a repassar concretamente o dia diante de Deus.

## Como o exame funciona

O fluxo segue cinco grandes momentos:

1. **Presença de Deus** — breve oração inicial antes do exame propriamente dito.
2. **Plano de Vida Espiritual** — verificação simples das práticas (oração da manhã/tarde, leitura do Evangelho e do Novo Testamento, Santa Missa, Angelus, Terço, visita ao Santíssimo), com wording diferente aos domingos por causa do preceito dominical. Deixar de cumprir uma prática pessoal não é tratado como pecado.
3. **Sete pecados capitais** — cada pecado é dividido em situações concretas do dia (trabalho, família, pensamentos, etc.), em vez de perguntas abstratas como "você teve soberba?". Marcar "Sim" significa apenas que algo aconteceu e merece ser examinado com calma, não que houve pecado.
4. **Revisão final** — pergunta de segurança para algo que não se encaixou nas categorias anteriores, e um momento de agradecimento.
5. **Contrição** — Ato de Contrição para encerrar o exame na presença de Deus.

Ao final, o app mostra um resumo do dia com uma breve indicação (sem sermão) de qual área pode merecer mais atenção no dia seguinte, com base na frequência de respostas "Sim".

O progresso do dia e o histórico de exames concluídos ficam salvos apenas no navegador (`localStorage`).

## Desenvolvimento

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (roda typecheck + vite build)
npm run lint      # oxlint
```

Stack: React + TypeScript + Vite + Tailwind CSS.
