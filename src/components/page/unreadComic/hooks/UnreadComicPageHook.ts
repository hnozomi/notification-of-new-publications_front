import { useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';

import { AuthContext } from '@/provider';

export const useUnreadComicPageHook = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { loginAccount } = useContext(AuthContext);

  return {
    modal: { isOpen, onClose, onOpen },
    unreadComics: loginAccount?.unreadComics,
  };
};

export type UnreadBookProps = ReturnType<typeof useUnreadComicPageHook>;
