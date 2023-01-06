import { useDisclosure } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo, useState } from 'react';

import { UnreadBookContent } from '@/components/page/unreadBook/components/UnreadBookContent';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { BaseLayout, Header } from '@/components/ui';
import { Footer } from '@/components/ui/footer/Footer';
import { AddComicModal } from '@/components/ui/modal/AddComicModal';
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
          <UnreadBookContent />
        ) : (
          <WatchListContent />
        )}
      </BaseLayout>
      <Footer
        selectedMenu={selectedMenu}
        switchMenu={switchMenu}
        onOpen={onOpen}
      />
      <AddComicModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});

TopPage.displayName = Object.keys({ TopPage }).join();

export default TopPage;
