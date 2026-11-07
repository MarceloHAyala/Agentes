# Repositório de agentes

Fonte dos agentes reaproveitáveis. A arquitetura está em `ARQUITETURA.md`: leia antes de mudar qualquer coisa.

- Agente novo: siga `skills/criar-agente/SKILL.md`, no modo "No repositório de agentes".
- Núcleos são genéricos: nada de nome, caminho ou regra de um projeto.
- Mudou um núcleo: suba a versão na marca `nucleo:` e registre no `CHANGELOG.md`.
- Antes de cada commit: `node validar.mjs`. Depois de mudar um núcleo, rode também os casos em `casos-teste/`.
