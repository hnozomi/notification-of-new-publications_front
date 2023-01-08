import { Button, Input, ModalProps, Text } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';

import { BaseModal } from '@/components/ui';

export type ComicVolumeUpdateModalProps = Omit<ModalProps, 'children'> & {
  onUpdate: () => void;
  setVolume: Dispatch<SetStateAction<number>>;
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
        <Button colorScheme="blue" onClick={onUpdate}>
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
      <Input
        type="number"
        onChange={(e) => setVolume(Number(e.target.value))}
      />
    </BaseModal>
  );
};
