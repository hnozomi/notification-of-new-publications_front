import { useDisclosure } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo, useState } from 'react';

import { UnreadBookContent } from '@/components/page/unreadBook/components/UnreadBookContent';
import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { BaseLayout, Header } from '@/components/ui';
import { Footer } from '@/components/ui/footer/Footer';
import { useSearchBooks } from '@/network/api/search/useSearch';
import { MENU_TYPE } from '@/types';

const TopPage: NextPage = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedMenu, setSelectedMenu] = useState<MENU_TYPE>('unread');
  const switchMenu = (menu: MENU_TYPE) => {
    setSelectedMenu(menu);
  };

  const { data, refetch: onSearch } = useSearchBooks(
    { query: { entity: 'watchList', title: 'ナルト' } },
    {
      enabled: false,
    },
  );

  console.log(data, 'data');

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
