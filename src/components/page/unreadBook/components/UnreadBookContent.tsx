import { Box, Grid, GridItem, Spacer } from '@chakra-ui/react';
import { FC } from 'react';

import { UnreadBookProps } from '@/components/page/unreadBook/hooks/UnreadBookPageHook';
import { BookCard } from '@/components/ui';

export const UnreadBookContent: FC<UnreadBookProps> = () => {
  return (
    <Box>
      <Spacer h="1rem" />
      <Grid gap="1rem" p="1rem" templateColumns="repeat(3, 1fr)">
        <GridItem h="10">
          <BookCard />
        </GridItem>
        <GridItem h="10">
          <BookCard />
        </GridItem>
        <GridItem h="10">
          <BookCard />
        </GridItem>
      </Grid>
      <Spacer h="1rem" />
    </Box>
  );
};
