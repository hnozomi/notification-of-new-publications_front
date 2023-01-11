import { NextPage } from 'next';
import { memo } from 'react';

import { LoginContent } from '@/components/page/login/components/LoginContent';
import { useLoginPageHook } from '@/components/page/login/hooks/useLoginPageHook';

const LoginPage: NextPage<{ email: string }> = memo(({ email }) => {
  console.log(email);
  return <LoginContent {...useLoginPageHook()} />;
});

LoginPage.displayName = Object.keys({ LoginPage }).join();

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const cookies = nookies.get(ctx);
//   const session = cookies.session || '';

//   // セッションIDを検証して、認証情報を取得する
//   const user = await firebaseAdmin
//     .auth()
//     .verifySessionCookie(session, true)
//     .catch(() => null);

//   // 認証情報が無い場合は、ログイン画面へ遷移させる
//   if (!user) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       email: user.email,
//     },
//   };
// };

export default LoginPage;
