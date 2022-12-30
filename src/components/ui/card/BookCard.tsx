import { CardProps, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { TiDelete } from 'react-icons/ti';

import { BaseCard } from '@/components/ui/card/BaseCard';
import { BaseCardBody } from '@/components/ui/card/BaseCardBody';
import { BaseText } from '@/components/ui/text';

type BookCardProps = CardProps & {
  book: { image: string; title: string };
  onOpen: () => void;
};

export const BookCard: FC<BookCardProps> = ({ book, onOpen, ...props }) => {
  return (
    <BaseCard {...props}>
      <BaseCardBody p="0.3rem">
        <TiDelete
          className="unreadBookDeleteIcon"
          size="1.7rem"
          onClick={onOpen}
        />
        <Image
          alt="漫画の表紙"
          borderRadius="lg"
          boxSize="100%"
          h="8rem"
          src={book.image}
        />
        <BaseText fontSize="12px" py="0.5rem">
          {book.title}
        </BaseText>
      </BaseCardBody>
    </BaseCard>
  );
};
