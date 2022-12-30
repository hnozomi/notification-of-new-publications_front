import { HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';

import { BaseCard, BaseCardBody, BaseText } from '@/components/ui';

type Props = {
  onOpen: () => void;
};

export const ComicTitleList: FC<Props> = ({ onOpen }) => {
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
            <BaseText fontWeight="bold">ワンピース</BaseText>
            <BaseText>34巻まで</BaseText>
          </HStack>
          <FaTrash onClick={onOpen} />
        </HStack>
      </BaseCardBody>
    </BaseCard>
  );
};
