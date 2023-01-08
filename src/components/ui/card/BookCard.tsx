import { CardProps, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { TiDelete } from 'react-icons/ti';

import { BaseCard } from '@/components/ui/card/BaseCard';
import { BaseCardBody } from '@/components/ui/card/BaseCardBody';
import { BaseText } from '@/components/ui/text';
import { UnreadComics } from '@/entity';

type BookCardProps = CardProps & {
  book: UnreadComics;
  index: number;
  onOpen: (deleteBook: number, title: string) => void;
};

export const BookCard: FC<BookCardProps> = ({
  book,
  index,
  onOpen,
  ...props
}) => {
  return (
    <BaseCard {...props} h="12rem">
      <BaseCardBody p="0.3rem">
        <TiDelete
          className="unreadBookDeleteIcon"
          size="1.7rem"
          onClick={() => onOpen(index, book.title)}
        />
        <Image
          alt="漫画の表紙"
          borderRadius="lg"
          boxSize="100%"
          h="8rem"
          src={book.largeImageUrl}
        />
        <BaseText fontSize="12px" py="0.5rem">
          {book.title}
        </BaseText>
      </BaseCardBody>
    </BaseCard>
  );
};
