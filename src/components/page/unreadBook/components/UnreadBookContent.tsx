import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import { UnreadBookDeleteModal } from '@/components/model/unread/UnreadBookDeleteModal';
import { useUnreadBookPageHook } from '@/components/page/unreadBook/hooks/UnreadBookPageHook';
import { BookCard } from '@/components/ui';

export const UnreadBookContent: FC = () => {
  const { modal } = useUnreadBookPageHook();
  return (
    <>
      <Grid gap="2" mt="0.5rem" mx="0.3rem" templateColumns="repeat(3, 1fr)">
        <GridItem>
          <BookCard onOpen={modal.onOpen} />
        </GridItem>
        <GridItem>
          <BookCard onOpen={modal.onOpen} />
        </GridItem>
        <GridItem>
          <BookCard onOpen={modal.onOpen} />
        </GridItem>
        <GridItem>
          <BookCard onOpen={modal.onOpen} />
        </GridItem>
      </Grid>
      <UnreadBookDeleteModal {...modal} />
    </>
  );
};
