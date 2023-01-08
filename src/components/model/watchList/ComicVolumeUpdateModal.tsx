import { Button, Input, ModalProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseModal } from '@/components/ui';

export type ComicVolumeUpdateModalProps = Omit<ModalProps, 'children'> & {
  onUpdate: () => void;
  setVolume: any;
};

export const ComicVolumeUpdateModal: FC<ComicVolumeUpdateModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  setVolume,
}) => {
  return (
    <BaseModal
      footer={
        <Button colorScheme="red" onClick={onUpdate}>
          更新する
        </Button>
      }
      isOpen={isOpen}
      title="タイトル"
      onClose={onClose}
    >
      <Text fontWeight="bold" mb="1rem">
        巻数を入力してください
      </Text>
      <Input onChange={(e) => setVolume(e.target.value)} />
    </BaseModal>
  );
};
