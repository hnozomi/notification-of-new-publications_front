import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { ComicDeleteModal } from '@/components/model/watchList/ComicDeleteModal';
import { ComicTitleList } from '@/components/model/watchList/ComicTitleList';
import { useWatchListPageHook } from '@/components/page/watchList/hooks/useWatchListPageHook';

export const WatchListContent: FC = () => {
  const { modal } = useWatchListPageHook();
  console.log(modal);
  return (
    <Box>
      <ComicTitleList onOpen={modal.onOpen} />
      <ComicDeleteModal {...modal} />
    </Box>
  );
};
