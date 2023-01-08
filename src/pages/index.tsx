import { useDisclosure } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo, useState } from 'react';

import { UnreadComicContent } from '@/components/page/unreadComic/components/UnreadComicContent';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { BaseLayout, Header } from '@/components/ui';
import { Footer } from '@/components/ui/footer/Footer';
import { MENU_TYPE } from '@/types';

const TopPage: NextPage = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedMenu, setSelectedMenu] = useState<MENU_TYPE>('unread');
  const switchMenu = (menu: MENU_TYPE) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <BaseLayout header={<Header selectedMenu={selectedMenu} />}>
        {selectedMenu === 'unread' ? (
          <UnreadComicContent />
        ) : (
          <WatchListContent />
        )}
      </BaseLayout>
      <Footer
        selectedMenu={selectedMenu}
        switchMenu={switchMenu}
        onOpen={onOpen}
      />
      {/* <AddComicModal
        data={data}
        isOpen={isOpen}
        selectedMenu={selectedMenu}
        onClose={onClose}
        onSearch={onSearch}
      /> */}
    </>
  );
});

TopPage.displayName = Object.keys({ TopPage }).join();

export default TopPage;
