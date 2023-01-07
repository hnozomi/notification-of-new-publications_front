import { Box, Button, ModalProps, Text } from '@chakra-ui/react';
import { UseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';

import { BaseModal } from '@/components/ui/modal/BaseModal';
import { SearchResults } from '@/entity';
import { MENU_TYPE } from '@/types';

export type AddComicModalProps = Omit<ModalProps, 'children'> & {
  data: SearchResults[];
  onSearch: () => Promise<UseQueryResult>;
  selectedMenu: MENU_TYPE;
};

export const AddComicModal: FC<AddComicModalProps> = ({
  data,
  isOpen,
  onClose,
  onSearch,
  selectedMenu,
}) => {
  return (
    <BaseModal
      footer={
        <Button colorScheme="blue" onClick={onSearch}>
          追加する
        </Button>
      }
      isOpen={isOpen}
      title="追加"
      onClose={onClose}
    >
      <Text fontWeight="bold" mb="1rem">
        {`${selectedMenu}に追加する漫画を入力してください`}
      </Text>

      {data &&
        data.map((d, index) => (
          <Box key={index}>
            <Text>{d.title}</Text>
            <Text>{d.author}</Text>
          </Box>
        ))}
    </BaseModal>
  );
};
