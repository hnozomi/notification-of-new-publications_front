import { Button, ModalProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseModal } from '@/components/ui';

export type ComicDeleteModalProps = Omit<ModalProps, 'children'> & {
  onDelete: () => void;
  targetComicTitle: string;
};

export const ComicDeleteModal: FC<ComicDeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
  targetComicTitle,
}) => {
  return (
    <BaseModal
      footer={
        <Button colorScheme="red" onClick={onDelete}>
          削除する
        </Button>
      }
      isOpen={isOpen}
      title="削除"
      onClose={onClose}
    >
      <Text fontWeight="bold" mb="1rem">
        {`${targetComicTitle}をウォッチリストから削除しますか`}
      </Text>
    </BaseModal>
  );
};
