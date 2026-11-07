const { onCall } = require('firebase-functions/v2/https');
const { getFirestore } = require('firebase-admin/firestore');

exports.verFatura = onCall(async (req) => {
  if (!req.auth) throw new Error('login');
  const doc = await getFirestore().doc(`users/${req.data.uid}/faturas/${req.data.id}`).get();
  return doc.data();
});
