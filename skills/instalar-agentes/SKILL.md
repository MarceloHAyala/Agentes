---
name: instalar-agentes
description: Instala agentes do repositório MarceloHAyala/Agentes no projeto atual, adapta cada um à stack e atualiza o CLAUDE.md. Use quando pedirem para instalar, adicionar ou atualizar esses agentes.
argument-hint: "[agentes separados por espaço, ou vazio para escolher pela stack]"
---

Pergunte só se o projeto não der a resposta. Rodar de novo deve ser seguro.

1. Clone `https://github.com/MarceloHAyala/Agentes.git` com `--depth 1` numa pasta temporária.
2. **Conheça o projeto**: `CLAUDE.md`, README, manifestos, `firebase.json`, regras do banco, código do
   backend e o histórico. Identifique quais produtos são de fato usados: `firebase.json` com `database`
   e chamadas `firebase/database` indicam RTDB, não Firestore.
3. **Escolha** os agentes: os dos argumentos, ou os de `agentes/` cujo `instalar-quando` vale para o
   projeto. Não instale um agente sem objeto e diga por quê.
4. **Copie**:
   - `agentes/<agente>.md` para `.claude/agents/`, substituindo o núcleo. Se o arquivo local tiver sido
     editado à mão, mostre o que se perderia antes de sobrescrever.
   - **Nunca altere nem remova arquivos com a marca `<!-- local: ... -->`** nem a memória deles. Se um
     agente do repositório tiver o mesmo nome de um local, não o instale e avise.
   - `comum/PROTOCOLO.md` para `.claude/agentes/PROTOCOLO.md`.
   - `ARQUITETURA.md` para `.claude/agentes/ARQUITETURA.md` e `modelo/agente.md` para
     `.claude/agentes/modelo-agente.md`.
   - `skills/revisar-entrega/` e `skills/criar-agente/` para `.claude/skills/`.
5. **Adapte**: em `.claude/agent-memory/<agente>/` crie o que faltar, **sem sobrescrever o que existe**:
   - `perfil.md`, específico e com caminhos reais:
     - `gatilhos:` caminhos e tipos de mudança que acionam o agente, incluindo os arquivos que importam
       mesmo sem ser código (Markdown, YAML, dados);
     - `autores de referência:` o `git config user.name` atual;
     - stack e produtos usados, escala realista, o que não sugerir;
     - comandos de teste e, por agente: produtos e preços (custos), tipos de sessão (segurança),
       domínio e fontes oficiais (domínio), caminhos, estado, fonte de preços e, se houver vídeo, roteiro, motor de gravação, voz, grafias de
     pronúncia e scripts de narração, onde ficam a FAQ e os guias e, nos gatilhos, os temas que eles descrevem
     (vitrine).
   - `aprendizados.md` com o título, e `MEMORY.md` com: "Leia `perfil.md` e `aprendizados.md` antes de
     trabalhar."

   Se o projeto já tinha agentes parecidos, leve o que for específico deles para o perfil.
6. Acrescente ao `.gitattributes` a linha
   `.claude/agent-memory/*/aprendizados.md merge=union`, para colegas não terem conflito.
7. **`CLAUDE.md`**: crie ou substitua apenas o bloco entre `<!-- agentes:inicio -->` e
   `<!-- agentes:fim -->`:

   ```
   <!-- agentes:inicio -->
   ## Agentes de revisão
   Ao terminar toda tarefa que altere arquivos do projeto, rode a skill `revisar-entrega` sem esperar pedido. Ela
   escolhe os agentes e os modelos, aplica as correções seguras e registra os aprendizados.
   Agentes instalados: <agente: quando roda, incluindo os locais já listados>.
   Agentes com marca `nucleo:` só mudam pelo repositório MarceloHAyala/Agentes; os com marca `local:` são
   deste projeto. Para acrescentar um agente só aqui, use a skill `criar-agente`.
   <!-- agentes:fim -->
   ```

8. Apague a pasta temporária, confira `git status` e resuma o que foi instalado e detectado. Não faça
   commit sem pedido. Avise que os colegas passam a usar tudo no `git pull`.
