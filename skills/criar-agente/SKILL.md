---
name: criar-agente
description: Cria um agente novo seguindo a arquitetura de agentes, só no projeto atual ou no próprio repositório de agentes. Use quando pedirem para criar ou acrescentar um agente.
argument-hint: "[função do agente]"
---

Leia a arquitetura e o modelo antes de escrever. Pergunte só o que o projeto não responder.

**Descubra onde você está:**
- Existem `comum/PROTOCOLO.md` e `agentes/` na raiz: é o **repositório de agentes**. Arquitetura em
  `ARQUITETURA.md`, modelo em `modelo/agente.md`.
- Existe `.claude/agentes/PROTOCOLO.md`: é um **projeto**. Arquitetura em `.claude/agentes/ARQUITETURA.md`,
  modelo em `.claude/agentes/modelo-agente.md`.
- Nenhum dos dois: diga para rodar `/instalar-agentes` antes e pare.

Confira se já existe agente com a mesma função; se existir, proponha ampliá-lo em vez de duplicar.

## Num projeto
Nada sai deste projeto: **não clone nem envie nada ao repositório MarceloHAyala/Agentes**.
1. Crie `.claude/agents/<nome>.md` a partir do modelo, com a marca `<!-- local: <nome> v1 -->` e sem
   `instalar-quando`. Aqui o agente pode citar caminhos e regras do projeto.
2. Em `.claude/agent-memory/<nome>/` crie `perfil.md` (gatilhos reais, `autores de referência:` com o
   `git config user.name`, stack, escala, o que não sugerir, comandos de teste), `aprendizados.md` com o
   título, e `MEMORY.md` com: "Leia `perfil.md` e `aprendizados.md` antes de trabalhar."
3. Acrescente o agente à lista de instalados no bloco `agentes:inicio` do `CLAUDE.md`, sem mexer no resto.
4. Faça o teste: chame o agente com um caso que ele deve achar e um em que não deve reclamar.
5. Não faça commit sem pedido. Avise que os colegas recebem o agente no `git pull`.

## No repositório de agentes
1. Crie `agentes/<nome>.md` a partir do modelo, com `<!-- nucleo: <nome> v1.0.0 -->` e `instalar-quando`
   verificável. **Sem nome, caminho ou regra de um projeto**: isso vai no perfil, na instalação. Diga no
   núcleo o que o perfil precisa trazer.
2. Crie `casos-teste/<nome>-<caso>/` com um `esperado.md` para o que ele deve achar e outro para um caso
   em que não deve reclamar.
3. Atualize o `CHANGELOG.md` e, se o agente precisar de algo novo no perfil, o passo 5 de
   `skills/instalar-agentes/SKILL.md`.
4. Rode `node validar.mjs` até passar. Instale num projeto temporário e rode os casos.
5. Não faça commit sem pedido. Depois do push, ele chega aos projetos com `/instalar-agentes`.
