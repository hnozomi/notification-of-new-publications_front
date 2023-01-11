import { GetServerSideProps, NextPage } from 'next';
import nookies from 'nookies';
import { memo, useState } from 'react';

import { UnreadComicContent } from '@/components/page/unreadComic/components/UnreadComicContent';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { Header } from '@/components/ui';
import { Footer } from '@/components/ui/footer/Footer';
import { firebaseAdmin } from '@/lib/server';
import { MENU_TYPE } from '@/types';

const TopPage: NextPage = memo(() => {
  const [selectedMenu, setSelectedMenu] = useState<MENU_TYPE>('unread');
  const switchMenu = (menu: MENU_TYPE) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header selectedMenu={selectedMenu} />
      {selectedMenu === 'unread' ? (
        <UnreadComicContent />
      ) : (
        <WatchListContent />
      )}
      <Footer selectedMenu={selectedMenu} switchMenu={switchMenu} />
    </>
  );
});

TopPage.displayName = Object.keys({ TopPage }).join();

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = cookies.session || '';

  // セッションIDを検証して、認証情報を取得する
  const user = await firebaseAdmin
    .auth()
    .verifySessionCookie(session, true)
    .catch(() => null);

  // 認証情報が無い場合は、ログイン画面へ遷移させる

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { user: user } };
};

export default TopPage;
