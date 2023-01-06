import { useDisclosure } from '@chakra-ui/react';
import { onValue, ref } from 'firebase/database';

import { database } from '@/lib';

export const useUnreadBookPageHook = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const pathRef = ref(database, 'user');
  onValue(
    pathRef,
    (snapshot) => {
      //send new data to react with setData every time information changed on realtime db
      const newData = snapshot.val();
      console.log(newData);
    },
    (error) => {
      console.log(error);
    },
  );

  return { modal: { isOpen, onClose, onOpen } };
};

export type UnreadBookProps = ReturnType<typeof useUnreadBookPageHook>;
