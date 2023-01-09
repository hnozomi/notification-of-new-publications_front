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
  const [targetComicTitle, setTargetComicTitle] = useState('');
  const [volume, setVolume] = useState(0);
  const { loginAccount, onFetchAccount } = useContext(AuthContext);

  const onUpdateModalOpenOpen = (newVolume: number) => {
    setTargetComic(newVolume);
    updateOnOpen();
  };

  const onDeleteModalOpen = (deleteBook: number, title: string) => {
    setTargetComic(deleteBook);
    setTargetComicTitle(title);
    deleteOnOpen();
  };

  const onUpdate = () => {
    if (!loginAccount) return;
    const newWatchList = { ...loginAccount };
    newWatchList.watchLists[targetComic].volume = volume;
    const pathRef = ref(database, `user/${loginAccount.accountId}/watchLists`);
    set(pathRef, newWatchList.watchLists);
    onFetchAccount(loginAccount.userId);
    updateOnClose();
  };

  const onDelete = () => {
    if (!loginAccount) return;
    const newWatchList = { ...loginAccount };
    newWatchList.watchLists?.splice(targetComic, 1);
    const pathRef = ref(database, `user/${loginAccount.accountId}/watchLists`);
    set(pathRef, newWatchList.watchLists);
    onFetchAccount(loginAccount.userId);
    deleteOnClose();
  };

  return {
    deleteModal: { deleteIsOpen, deleteOnClose, onDeleteModalOpen },
    onDelete,
    onUpdate,
    setVolume,
    targetComicTitle,
    updateModal: { onUpdateModalOpenOpen, updateIsOpen, updateOnClose },
    watchLists: loginAccount?.watchLists,
  };
};

export type WatchListProps = ReturnType<typeof useWatchListPageHook>;
