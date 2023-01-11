import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

import {
  BaseGridItem,
  BookCard,
  NotRegisteredComicImage,
} from '@/components/ui';
import { UnreadComics } from '@/entity';

type Props = {
  onDeleteModalOpen: (deleteBook: number, title: string) => void;
  unreadComics?: UnreadComics[];
};

export const UnreadComicList: FC<Props> = ({
  onDeleteModalOpen,
  unreadComics,
  ...props
}) => {
  return (
    <>
      {unreadComics ? (
        // <BaseGrid
        <SimpleGrid
          columns={[2, 10, 10]}
          gap="5"
          minChildWidth="5rem"
          mx="0.3rem"
          my="0.5rem"
          // templateColumns="repeat(3, 1fr)"
          {...props}
        >
          {unreadComics.map((comic, index) => (
            <BaseGridItem key={comic.title}>
              <BookCard book={comic} index={index} onOpen={onDeleteModalOpen} />
            </BaseGridItem>
          ))}
        </SimpleGrid>
      ) : (
        // </BaseGrid>
        <NotRegisteredComicImage />
      )}
    </>
  );
};
