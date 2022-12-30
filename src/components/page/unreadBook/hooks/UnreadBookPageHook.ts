import { useDisclosure } from '@chakra-ui/react';

export const useUnreadBookPageHook = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return { modal: { isOpen, onClose, onOpen } };
};

export type UnreadBookProps = ReturnType<typeof useUnreadBookPageHook>;
