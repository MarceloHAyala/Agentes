// Deixa /instalar-agentes disponível em qualquer projeto desta máquina. Rode uma vez por máquina.
import { cpSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = dirname(fileURLToPath(import.meta.url));
const destino = join(homedir(), '.claude', 'skills', 'instalar-agentes');
cpSync(join(raiz, 'skills', 'instalar-agentes'), destino, { recursive: true });
console.log(`Pronto: /instalar-agentes em ${destino}`);
