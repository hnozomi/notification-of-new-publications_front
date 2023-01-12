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
        <SimpleGrid
          columns={[3, 5, 10]}
          gap="5"
          mx="0.3rem"
          my="0.5rem"
          {...props}
        >
          {unreadComics.map((comic, index) => (
            <BaseGridItem key={comic.title} maxWidth="8rem">
              <BookCard book={comic} index={index} onOpen={onDeleteModalOpen} />
            </BaseGridItem>
          ))}
        </SimpleGrid>
      ) : (
        <NotRegisteredComicImage />
      )}
    </>
  );
};
