import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { ComicDeleteModal } from '@/components/model/watchList/ComicDeleteModal';
import { ComicTitleList } from '@/components/model/watchList/ComicTitleList';
import { ComicVolumeUpdateModal } from '@/components/model/watchList/ComicVolumeUpdateModal';
import { useWatchListPageHook } from '@/components/page/watchList/hooks/useWatchListPageHook';

export const WatchListContent: FC = () => {
  const {
    deleteModal,
    onUpdate,
    setIsEditable,
    setVolume,
    updateModal,
    watchLists,
  } = useWatchListPageHook();

  return (
    <Box h="90%" sx={{ overflow: 'scroll', overflowX: 'hidden' }}>
      <ComicTitleList
        deleteOnOpen={deleteModal.deleteOnOpen}
        setIsEditable={setIsEditable}
        updateOnOpen={updateModal.onUpdateModalOpenOpen}
        watchLists={watchLists}
        onUpdate={onUpdate}
      />
      <ComicDeleteModal
        isOpen={deleteModal.deleteIsOpen}
        onClose={deleteModal.deleteOnClose}
      />
      <ComicVolumeUpdateModal
        isOpen={updateModal.updateIsOpen}
        setVolume={setVolume}
        onClose={updateModal.updateOnClose}
        onUpdate={onUpdate}
      />
    </Box>
  );
};
