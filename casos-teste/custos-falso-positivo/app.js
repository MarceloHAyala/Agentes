import { getDatabase, ref, query, limitToLast, onValue } from 'firebase/database';

export function abrirPainel(uid, render) {
  return onValue(query(ref(getDatabase(), `/mensagens/${uid}`), limitToLast(20)), (s) => render(s.val()));
}
