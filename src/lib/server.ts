import admin from 'firebase-admin';

// firebase JavaScript SDK と firebase Admin SDKは別物(クライアントかバックエンドの違い)

export const firebaseAdmin =
  admin.apps[0] ||
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string),
    ),
  });
