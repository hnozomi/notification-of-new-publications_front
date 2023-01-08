import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

import { UnreadComicDeleteModal } from '@/components/model/unread/UnreadComicDeleteModal';
import { useUnreadComicPageHook } from '@/components/page/unreadComic/hooks/UnreadComicPageHook';
import { BookCard } from '@/components/ui';

export const UnreadComicContent: FC = () => {
  const { modal, unreadComics } = useUnreadComicPageHook();

  return (
    <>
      {unreadComics ? (
        <Grid
          gap="2"
          mt="0.5rem"
          mx="0.3rem"
          sx={{ overflow: 'scroll', overflowX: 'hidden' }}
          templateColumns="repeat(3, 1fr)"
        >
          {unreadComics.map((comic) => (
            <GridItem key={comic.title}>
              <BookCard book={comic} onOpen={modal.onOpen} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Spinner />
      )}
      <UnreadComicDeleteModal {...modal} />
    </>
  );
};
