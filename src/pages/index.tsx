import { NextPage } from 'next';
import { memo, useState } from 'react';

import { UnreadBookContent } from '@/components/page/unreadBook/components/UnreadBookContent';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { BaseLayout, Header } from '@/components/ui';
import { Footer } from '@/components/ui/footer/Footer';
import { MENU_TYPE } from '@/types';

const TopPage: NextPage = memo(() => {
  const [selectedMenu, setSelectedMenu] = useState<MENU_TYPE>('unread');
  const switchMenu = (menu: MENU_TYPE) => {
    setSelectedMenu(menu);
  };
  return (
    <>
      <BaseLayout header={<Header selectedMenu={selectedMenu} />}>
        {selectedMenu === 'unread' ? (
          <UnreadBookContent />
        ) : (
          <WatchListContent />
        )}
      </BaseLayout>
      <Footer selectedMenu={selectedMenu} switchMenu={switchMenu} />
    </>
  );
});

TopPage.displayName = Object.keys({ TopPage }).join();

export default TopPage;
