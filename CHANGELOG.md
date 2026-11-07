# Mudanças

## 1.2.0
- revisor-seguranca v1.1.0: IA e agentes (prompt injection, ação sem confirmação), OAuth, webhooks
  idempotentes, SSRF, ReDoS, cadeia de dependências, cotas dribladas e mesma regra em todas as portas.
- revisor-seguranca pesquisa na internet só com termos públicos; o perfil pode proibir.

## 1.1.0
- `ARQUITETURA.md`, `CLAUDE.md`, `modelo/agente.md` e `validar.mjs` para acrescentar agentes aqui.
- Skill `criar-agente` e marca `local:` para agentes só do projeto; a instalação os preserva.
- `instalar-quando` em cada núcleo: novos agentes entram na escolha pela stack sem mudar o instalador.

## 1.0.3
- Refatoração grande sem risco e com ganho certo é feita direto (`REFATORAR`) e explicada no resumo.
- Com qualquer risco, pergunta ao usuário. Sai `REGISTRAR`; os agentes nunca criam issues.

## 1.0.2
- revisar-entrega: a triagem usa os gatilhos do perfil, valendo também para arquivos que não são código.
- instalar-agentes: gatilhos incluem esses arquivos, e o CLAUDE.md fala em arquivos do projeto.
- Protocolo: resultado de experimento registrado no repositório vale como evidência de `validado`.

## 1.0.1
- Protocolo: achado da revisão atual e dedução a partir de outro aprendizado não viram aprendizado.

## 1.0.0
- Núcleos: revisor-seguranca, revisor-custos-firebase (Firestore e RTDB), especialista-dominio, atualizador-vitrine.
- Protocolo comum de aprendizado, decisão sem perguntar e escolha de modelo.
- Skills instalar-agentes e revisar-entrega. Casos de teste iniciais.
