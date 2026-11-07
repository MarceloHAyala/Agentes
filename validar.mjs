// Confere se os agentes seguem a arquitetura. Uso: node validar.mjs
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = dirname(fileURLToPath(import.meta.url));
const erros = [];
const casos = readdirSync(join(raiz, 'casos-teste'));

for (const arq of readdirSync(join(raiz, 'agentes'))) {
  const nome = arq.replace(/\.md$/, '');
  const txt = readFileSync(join(raiz, 'agentes', arq), 'utf8').replace(/\r\n/g, '\n');
  const fm = txt.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? '';
  const exigir = (ok, msg) => { if (!ok) erros.push(`${nome}: ${msg}`); };

  exigir(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(nome), 'nome fora do padrão');
  exigir(new RegExp(`^name: ${nome}$`, 'm').test(fm), 'name difere do arquivo');
  for (const campo of ['description', 'model', 'effort', 'tools']) exigir(new RegExp(`^${campo}: .+`, 'm').test(fm), `falta ${campo}`);
  exigir(/^memory: project$/m.test(fm), 'falta memory: project');
  exigir(new RegExp(`<!-- nucleo: ${nome} v\\d+\\.\\d+\\.\\d+ -->`).test(txt), 'falta marca nucleo com versão');
  exigir(/<!-- instalar-quando: .+ -->/.test(txt), 'falta instalar-quando');
  exigir(txt.includes('.claude/agentes/PROTOCOLO.md'), 'não cita o protocolo');
  exigir(/## Regras invioláveis/.test(txt), 'falta Regras invioláveis');
  exigir(/## Relatório/.test(txt), 'falta Relatório');
  exigir(txt.includes('perfil.md'), 'não cita o perfil');
}

// Todo caso tem o resultado esperado escrito
for (const c of casos) {
  if (c !== 'README.md' && !existsSync(join(raiz, 'casos-teste', c, 'esperado.md'))) erros.push(`caso ${c}: falta esperado.md`);
}

if (erros.length) {
  console.error(erros.join('\n'));
  process.exit(1);
}
console.log('Arquitetura ok.');
