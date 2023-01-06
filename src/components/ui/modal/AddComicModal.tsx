import { Button, ModalProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseModal } from '@/components/ui/modal/BaseModal';

export type AddComicModalProps = Omit<ModalProps, 'children'>;

export const AddComicModal: FC<AddComicModalProps> = ({ isOpen, onClose }) => {
  return (
    <BaseModal
      footer={<Button colorScheme="red">追加する</Button>}
      isOpen={isOpen}
      title="タイトル"
      onClose={onClose}
    >
      <Text fontWeight="bold" mb="1rem">
        ワンピースをウォッチリストから削除します
      </Text>
    </BaseModal>
  );
};
