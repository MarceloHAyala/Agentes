import { getDatabase, ref, onValue } from 'firebase/database';

export function abrirPainel(uid, render) {
  // Mostra só as mensagens do usuário
  return onValue(ref(getDatabase(), '/'), (s) => render(s.val().mensagens[uid]));
}
