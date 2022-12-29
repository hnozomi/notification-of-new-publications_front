import { NextPage } from 'next';
import { memo, useState } from 'react';

import { UnreadBookContent } from '@/components/page/unreadBook/components/UnreadBookContent';
import { useUnreadBookPageHook } from '@/components/page/unreadBook/hooks/UnreadBookPageHook';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { useWatchListPageHook } from '@/components/page/watchList/hooks/useWatchListPageHook';
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
          <UnreadBookContent {...useUnreadBookPageHook()} />
        ) : (
          <WatchListContent {...useWatchListPageHook()} />
        )}
      </BaseLayout>
      <Footer selectedMenu={selectedMenu} switchMenu={switchMenu} />
    </>
  );
});

TopPage.displayName = Object.keys({ TopPage }).join();

export default TopPage;
