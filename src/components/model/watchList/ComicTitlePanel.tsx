import { HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';

import { BaseCard, BaseCardBody, BaseText } from '@/components/ui';

type Props = { book: { title: string; volume: string }; onOpen: () => void };

export const ComicTitlePanel: FC<Props> = ({ book, onOpen }) => {
  return (
    <BaseCard
      bg="silver"
      borderRadius="0.4rem"
      boxShadow="0 0 3px #d6d6d6"
      m="1rem"
    >
      <BaseCardBody>
        <HStack justifyContent="space-between">
          <HStack>
            <BaseText fontWeight="bold">{book.title}</BaseText>
            <BaseText>{`${book.volume}巻まで`}</BaseText>
          </HStack>
          <FaTrash onClick={onOpen} />
        </HStack>
      </BaseCardBody>
    </BaseCard>
  );
};
