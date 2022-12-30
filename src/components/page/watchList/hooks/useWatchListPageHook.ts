import { useDisclosure } from '@chakra-ui/react';

export const useWatchListPageHook = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return { modal: { isOpen, onClose, onOpen } };
};

export type WatchListProps = ReturnType<typeof useWatchListPageHook>;
