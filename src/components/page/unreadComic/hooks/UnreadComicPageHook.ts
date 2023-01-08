import { useDisclosure } from '@chakra-ui/react';

import { useGetFirebase } from '@/hooks';

export const useUnreadComicPageHook = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { unreadComics } = useGetFirebase();
  // const { loginAccount } = useContext(AuthContext);

  return { modal: { isOpen, onClose, onOpen }, unreadComics };
};

export type UnreadBookProps = ReturnType<typeof useUnreadComicPageHook>;
