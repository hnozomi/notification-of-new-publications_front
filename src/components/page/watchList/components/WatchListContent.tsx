import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { ComicDeleteModal } from '@/components/model/watchList/ComicDeleteModal';
import { ComicTitleList } from '@/components/model/watchList/ComicTitleList';
import { ComicVolumeUpdateModal } from '@/components/model/watchList/ComicVolumeUpdateModal';
import { useWatchListPageHook } from '@/components/page/watchList/hooks/useWatchListPageHook';

export const WatchListContent: FC = () => {
  const {
    deleteModal,
    onDelete,
    onUpdate,
    setVolume,
    targetComicTitle,
    updateModal,
    watchLists,
  } = useWatchListPageHook();

  return (
    <Box h="80%" sx={{ overflow: 'scroll', overflowX: 'hidden' }}>
      <ComicTitleList
        deleteOnOpen={deleteModal.onDeleteModalOpen}
        updateOnOpen={updateModal.onUpdateModalOpenOpen}
        watchLists={watchLists}
        onUpdate={onUpdate}
      />
      <ComicDeleteModal
        isOpen={deleteModal.deleteIsOpen}
        targetComicTitle={targetComicTitle}
        onClose={deleteModal.deleteOnClose}
        onDelete={onDelete}
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
