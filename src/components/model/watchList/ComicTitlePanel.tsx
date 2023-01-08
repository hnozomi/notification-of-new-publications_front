import { Button, HStack, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';

import { BaseCard, BaseCardBody, BaseText } from '@/components/ui';
import { WatchLists } from '@/entity';

type Props = {
  deleteOnOpen: () => void;
  index: number;
  onUpdate: (index: number, targetComic: number) => void;
  updateOnOpen: (volume: number) => void;
  watchList: WatchLists;
};

export const ComicTitlePanel: FC<Props> = ({
  deleteOnOpen,
  index,
  onUpdate,
  updateOnOpen,
  watchList,
}) => {
  return (
    <BaseCard
      bg="silver"
      borderRadius="0.4rem"
      boxShadow="0 0 3px #d6d6d6"
      m="1rem"
    >
      <BaseCardBody>
        <HStack justifyContent="space-between">
          <Stack>
            <BaseText fontWeight="bold">{watchList.title}</BaseText>
            <HStack>
              <BaseText fontSize="12px">{`${watchList.volume}巻まで`}</BaseText>
              <Button size="xs" onClick={() => updateOnOpen(index)}>
                巻数を更新
              </Button>
            </HStack>
          </Stack>
          <FaTrash onClick={deleteOnOpen} />
        </HStack>
      </BaseCardBody>
    </BaseCard>
  );
};
