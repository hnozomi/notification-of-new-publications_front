import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

import { UnreadBookDeleteModal } from '@/components/model/unread/UnreadBookDeleteModal';
import { useUnreadBookPageHook } from '@/components/page/unreadBook/hooks/UnreadBookPageHook';
import { BookCard } from '@/components/ui';

export const UnreadBookContent: FC = () => {
  const { modal, unreadBooks } = useUnreadBookPageHook();

  return (
    <>
      {unreadBooks ? (
        <Grid gap="2" mt="0.5rem" mx="0.3rem" templateColumns="repeat(3, 1fr)">
          {unreadBooks.map((book) => (
            <GridItem key={book.title}>
              <BookCard book={book} onOpen={modal.onOpen} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Spinner />
      )}
      <UnreadBookDeleteModal {...modal} />
    </>
  );
};
