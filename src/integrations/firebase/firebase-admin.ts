import { cert, getApps, initializeApp } from 'firebase-admin/app';

console.log('PROJECT_ID =', process.env.FIREBASE_PROJECT_ID);
console.log('CLIENT_EMAIL =', process.env.FIREBASE_CLIENT_EMAIL);
console.log(
  'PRIVATE_KEY =',
  process.env.FIREBASE_PRIVATE_KEY?.substring(0, 30),
);

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}