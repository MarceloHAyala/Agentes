# Arquitetura dos agentes

Agentes partem de um núcleo genérico, se especializam em cada projeto e aprendem com o histórico dele.

## As três partes de um agente
| Parte | Conteúdo | Onde fica no projeto | Quem altera |
|---|---|---|---|
| Núcleo | Método, regras invioláveis, formato do relatório. Sem nada de um projeto específico | `.claude/agents/<agente>.md` | A origem do agente (veja abaixo) |
| Perfil | Gatilhos, autores de referência, stack, escala, caminhos, comandos | `.claude/agent-memory/<agente>/perfil.md` | O próprio agente |
| Aprendizados | Decisões validadas e erros já vistos, com fonte | `.claude/agent-memory/<agente>/aprendizados.md` | O próprio agente |

O `MEMORY.md` da mesma pasta só aponta para os dois arquivos. Todo agente segue `PROTOCOLO.md`, que define
como aprender, classificar instruções (`APLICAR`, `APLICAR-COM-TESTE`, `REFATORAR`, `PERGUNTAR`), pedir
outro modelo e fechar o relatório. A skill `revisar-entrega` chama os agentes cujos gatilhos foram tocados.

## Dois tipos de agente
A primeira linha depois do cabeçalho do arquivo diz de onde ele veio:

| Marca | Origem | Efeito |
|---|---|---|
| `<!-- nucleo: nome v1.0.0 -->` | Repositório de agentes | Só muda lá; `/instalar-agentes` atualiza |
| `<!-- local: nome v1 -->` | Criado no próprio projeto | Muda no projeto; `/instalar-agentes` nunca altera nem remove |

## Acrescentar um agente
**Para todos os projetos (neste repositório).** Com este repositório aberto, siga
`skills/criar-agente/SKILL.md`. O agente nasce de `modelo/agente.md`, com casos em `casos-teste/`, e entra
nos projetos ao rodar `/instalar-agentes` depois do push. Rode `node validar.mjs` antes do commit.

**Só para um projeto (nada sobe para cá).** Dentro do projeto, rode `/criar-agente`. O agente fica
versionado apenas no repositório daquele projeto. Não há commit, PR ou clone neste repositório.

Use o primeiro caminho quando o método serve a qualquer projeto. Use o segundo quando depende de um único
produto ou é experimento. Um agente local pode virar geral depois: remova o que é do projeto e crie-o aqui.

## O que todo agente precisa ter
- Nome em minúsculas com hífen, único e descrito pela função (`revisor-acessibilidade`).
- `description` que diga o que faz, quando usar e o que pode alterar.
- `memory: project`, e `model: sonnet` com `effort: medium`, salvo motivo claro.
- Permissões mínimas: revisor só lê. Só dê `Edit` e `Write` a quem precisa alterar arquivos do projeto.
- Referência ao protocolo, regras invioláveis, modos de trabalho e relatório com a classe de cada instrução.
- Quando pedir `ESCALAR` para um modelo melhor.
- `instalar-quando` nos agentes deste repositório, para o instalador decidir pela stack.
- Pelo menos um caso que ele deve achar e um em que **não** deve reclamar.
