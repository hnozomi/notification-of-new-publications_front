import { Box, Heading, HStack, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';

import { WatchListProps } from '@/components/page/watchList/hooks/useWatchListPageHook';
import { BaseText } from '@/components/ui';

export const WatchListContent: FC<WatchListProps> = () => {
  return (
    <Box bgColor="pink" borderRadius="30%" m="1rem" p="2rem">
      <HStack justifyContent="space-between">
        <Stack>
          <Heading m="0">ワンピース</Heading>
          <BaseText>尾田栄一郎</BaseText>
          <BaseText>34巻まで</BaseText>
        </Stack>
        <FaTrash />
      </HStack>
    </Box>
  );
};
