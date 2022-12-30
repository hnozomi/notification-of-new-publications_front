import { Button, ModalProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseModal } from '@/components/ui';

export type ComicDeleteModalProps = Omit<ModalProps, 'children'>;

export const ComicDeleteModal: FC<ComicDeleteModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BaseModal
      footer={<Button colorScheme="red">削除する</Button>}
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
