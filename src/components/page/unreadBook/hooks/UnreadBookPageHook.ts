import { useDisclosure } from '@chakra-ui/react';

import { useGetFirebase } from '@/hooks';

export const useUnreadBookPageHook = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { unreadBooks } = useGetFirebase();

  return { modal: { isOpen, onClose, onOpen }, unreadBooks };
};

export type UnreadBookProps = ReturnType<typeof useUnreadBookPageHook>;
