import { NextPage } from 'next';
import { memo, useState } from 'react';

import { UnreadComicContent } from '@/components/page/unreadComic/components/UnreadComicContent';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { Header } from '@/components/ui';
import { Footer } from '@/components/ui/footer/Footer';
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

export default TopPage;
