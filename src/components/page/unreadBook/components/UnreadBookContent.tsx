import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import { UnreadBookDeleteModal } from '@/components/model/unread/UnreadBookDeleteModal';
import { useUnreadBookPageHook } from '@/components/page/unreadBook/hooks/UnreadBookPageHook';
import { BookCard } from '@/components/ui';

export const UnreadBookContent: FC = () => {
  const { modal } = useUnreadBookPageHook();

  const unreadBooks = [
    {
      image:
        'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2876/9784088832876_1_3.jpg?_ex=200x200',
      title: 'ワンピース 104巻',
    },
    {
      image:
        'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6912/9784088826912_1_3.jpg?_ex=200x200',
      title: 'ワンピース 99巻',
    },
  ];
  return (
    <>
      <Grid gap="2" mt="0.5rem" mx="0.3rem" templateColumns="repeat(3, 1fr)">
        {unreadBooks.map((book) => (
          <GridItem key={book.title}>
            <BookCard book={book} onOpen={modal.onOpen} />
          </GridItem>
        ))}
      </Grid>
      <UnreadBookDeleteModal {...modal} />
    </>
  );
};
