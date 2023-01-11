import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import SignupPage from '@/components/page/signup/Signup.page';
import { firebaseAdmin } from '@/lib/server';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = cookies.session || '';

  // セッションIDを検証して、認証情報を取得する
  const user = await firebaseAdmin
    .auth()
    .verifySessionCookie(session, true)
    .catch(() => null);

  // 認証情報が無い場合は、ログイン画面へ遷移させる

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: { user: user } };
};

export default SignupPage;
