import { useDisclosure } from '@chakra-ui/react';
import { ref, set } from 'firebase/database';
import { useContext, useState } from 'react';

import { database } from '@/lib';
import { AuthContext } from '@/provider';

export const useWatchListPageHook = () => {
  const {
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
    onOpen: deleteOnOpen,
  } = useDisclosure();
  const {
    isOpen: updateIsOpen,
    onClose: updateOnClose,
    onOpen: updateOnOpen,
  } = useDisclosure();
  const [targetComic, setTargetComic] = useState(0);
  const [volume, setVolume] = useState(0);
  const { loginAccount, onFetchAccount } = useContext(AuthContext);

  const onUpdateModalOpenOpen = (newVolume: number) => {
    setTargetComic(newVolume);
    updateOnOpen();
  };

  const onUpdate = () => {
    if (!loginAccount) return;
    const newWatchList = { ...loginAccount };
    newWatchList.watchLists[targetComic].volume = volume;
    const pathRef = ref(database, 'user/watchLists');
    set(pathRef, newWatchList.watchLists);
    onFetchAccount();
    updateOnClose();
  };

  return {
    deleteModal: { deleteIsOpen, deleteOnClose, deleteOnOpen },
    onUpdate,
    setVolume,
    updateModal: { onUpdateModalOpenOpen, updateIsOpen, updateOnClose },
    watchLists: loginAccount?.watchLists,
  };
};

export type WatchListProps = ReturnType<typeof useWatchListPageHook>;
