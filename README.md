# Agentes

Agentes "crus" para Claude Code que se especializam em cada projeto e aprendem com o histórico dele.

## Começar
```
git clone https://github.com/MarceloHAyala/Agentes.git
node Agentes/instalar-na-maquina.mjs
```
Depois, dentro de um projeto, rode `/instalar-agentes` (ou `/instalar-agentes revisor-seguranca`) e
faça commit do resultado. Os colegas recebem os agentes e o que eles aprenderam no `git pull`.

## Como funciona
| Parte | Onde fica no projeto | Quem altera |
|---|---|---|
| Núcleo: método e regras invioláveis | `.claude/agents/<agente>.md` | Só este repositório |
| Perfil: stack e calibragem | `.claude/agent-memory/<agente>/perfil.md` | O agente |
| Aprendizados | `.claude/agent-memory/<agente>/aprendizados.md` | O agente, a cada execução |

O `CLAUDE.md` do projeto manda rodar `revisar-entrega` ao fim de cada tarefa. A skill escolhe os agentes
e os modelos e aplica só as correções seguras. As regras de confiança estão em `comum/PROTOCOLO.md`:
só decisões de autores de referência viram padrão a exigir de todos.

## Comandos
| Comando | Onde | O que faz |
|---|---|---|
| `/instalar-agentes` | Qualquer projeto | Instala ou atualiza os agentes, preservando perfil, aprendizados e agentes locais |
| `/revisar-entrega` | Projeto com agentes | Revisa a entrega; normalmente roda sozinho ao fim da tarefa |
| `/criar-agente` | Projeto com agentes | Cria um agente só naquele projeto, sem enviar nada a este repositório |

## Acrescentar agentes
- **Para todos os projetos:** abra este repositório no Claude Code e peça o agente. Ele segue
  `skills/criar-agente/SKILL.md` e `node validar.mjs` confere o resultado.
- **Só no seu projeto:** rode `/criar-agente` nele. Nada sobe para cá.

Detalhes em [ARQUITETURA.md](ARQUITETURA.md).

## Atualizar
Mude o núcleo aqui, suba a versão no comentário `nucleo:` e no `CHANGELOG.md`, rode os `casos-teste/` e
rode `/instalar-agentes` no projeto.
