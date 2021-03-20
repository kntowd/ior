import * as admin from 'firebase-admin';

const cert = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(cert),
  });
}

export { admin };
