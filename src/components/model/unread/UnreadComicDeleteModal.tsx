import { Button, ModalProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseModal } from '@/components/ui';

export type UnreadComicDeleteModalProps = Omit<ModalProps, 'children'>;

export const UnreadComicDeleteModal: FC<UnreadComicDeleteModalProps> = ({
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
        ワンピースを削除します
      </Text>
    </BaseModal>
  );
};
