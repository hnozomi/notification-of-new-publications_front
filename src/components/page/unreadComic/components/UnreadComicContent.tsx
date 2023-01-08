import { Box, Grid, GridItem, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

import { UnreadComicDeleteModal } from '@/components/model/unread/UnreadComicDeleteModal';
import { useUnreadComicPageHook } from '@/components/page/unreadComic/hooks/UnreadComicPageHook';
import { BookCard } from '@/components/ui';

export const UnreadComicContent: FC = () => {
  const { deleteModal, onDelete, targetComicTitle, unreadComics } =
    useUnreadComicPageHook();
  return (
    <Box h="80%" sx={{ overflow: 'scroll', overflowX: 'hidden' }}>
      {unreadComics ? (
        <Grid
          gap="2"
          mb="0.5rem"
          mt="0.5rem"
          mx="0.3rem"
          templateColumns="repeat(3, 1fr)"
        >
          {unreadComics.map((comic, index) => (
            <GridItem key={comic.title}>
              <BookCard
                book={comic}
                index={index}
                onOpen={deleteModal.onDeleteModalOpen}
              />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Spinner />
      )}
      <UnreadComicDeleteModal
        isOpen={deleteModal.deleteIsOpen}
        targetComicTitle={targetComicTitle}
        onClose={deleteModal.deleteOnClose}
        onDelete={onDelete}
      />
    </Box>
  );
};
