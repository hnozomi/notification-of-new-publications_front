import { useDisclosure } from '@chakra-ui/react';
import { ref, set } from 'firebase/database';
import { useContext, useState } from 'react';

import { database } from '@/lib';
import { AuthContext } from '@/provider';

export const useUnreadComicPageHook = () => {
  const {
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
    onOpen: deleteOnOpen,
  } = useDisclosure();
  const { loginAccount, onFetchAccount } = useContext(AuthContext);

  const [targetComic, setTargetComic] = useState(0);
  const [targetComicTitle, setTargetComicTitle] = useState('');

  const onDeleteModalOpen = (deleteBook: number, title: string) => {
    setTargetComic(deleteBook);
    setTargetComicTitle(title);
    deleteOnOpen();
  };

  const onDelete = () => {
    if (!loginAccount) return;

    const newUnreadComics = { ...loginAccount };
    newUnreadComics.unreadComics?.splice(targetComic, 1);
    const pathRef = ref(
      database,
      `user/${loginAccount.accountId}/unreadComics`,
    );
    set(pathRef, newUnreadComics.unreadComics);
    onFetchAccount(loginAccount.userId);
    deleteOnClose();
  };

  return {
    deleteModal: { deleteIsOpen, deleteOnClose, onDeleteModalOpen },
    onDelete,
    targetComicTitle,
    unreadComics: loginAccount?.unreadComics,
  };
};

export type UnreadBookProps = ReturnType<typeof useUnreadComicPageHook>;
