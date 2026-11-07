---
name: revisar-entrega
description: Roda os agentes de revisão do projeto ao fim de uma tarefa que altere arquivos nos gatilhos deles, decide os modelos, aplica as correções seguras e registra os aprendizados. Use ao terminar toda entrega, sem esperar pedido.
---

Conduza a revisão sem perguntar ao programador, exceto nos casos `PERGUNTAR` do protocolo.

1. **Triagem.** Veja os arquivos alterados (`git status`, `git diff --stat`). Liste os agentes de
   `.claude/agents/` e leia os gatilhos no `perfil.md` de cada um. Se nada do que mudou estiver nos
   gatilhos de algum agente, pare, qualquer que seja o tipo de arquivo (código, Markdown, YAML, dados).
   Se a escolha não for óbvia, peça a um agente `general-purpose` com `model: haiku`. Se tocou
   autenticação ou permissões, o revisor de segurança sempre roda.
2. **Revisão.** Chame os agentes escolhidos em paralelo, informando a tarefa e a branch.
3. **Modelos.** Atenda sozinho, uma vez por agente, às linhas finais:
   - `ESCALAR`: chame o mesmo agente de novo com o modelo pedido e o foco indicado.
   - `VERIFICAR`: peça a um agente com o modelo pedido para tentar derrubar o achado. Se for derrubado
     com evidência, descarte o achado.
   No máximo **uma** rodada de verificação por entrega.
4. **Aplicação.**
   - `APLICAR` e `APLICAR-COM-TESTE`: aplique e rode os testes. Se quebrar algo que já funcionava,
     reverta a correção e transforme em `PERGUNTAR`.
   - `REFATORAR`: faça sem perguntar, depois das correções menores, e rode todos os testes. Se um
     teste precisar mudar ou algo quebrar, reverta e transforme em `PERGUNTAR`.
   - `PERGUNTAR`: junte tudo numa pergunta só, ao final, com ganho, risco e recomendação. Se o usuário
     recusar, escreva a recusa e o motivo no commit da entrega, para os agentes não repetirem a proposta.
   - **Nunca crie issues.**
5. **Fechamento.** Inclua `.claude/agent-memory/` no commit da entrega, quando houver commit. No resumo,
   diga em poucas linhas: agentes e modelos usados, o que foi aplicado e aprendido. Para cada
   refatoração feita, explique em linguagem simples por que foi feita e como.
