import { CardProps, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { TiDelete } from 'react-icons/ti';

import { BaseCard } from '@/components/ui/card/BaseCard';
import { BaseCardBody } from '@/components/ui/card/BaseCardBody';
import { BaseText } from '@/components/ui/text';

type BookCardProps = CardProps & {
  onOpen: () => void;
};

export const BookCard: FC<BookCardProps> = ({ onOpen, ...props }) => {
  return (
    <BaseCard {...props}>
      <BaseCardBody p="0.3rem">
        <TiDelete
          className="unreadBookDeleteIcon"
          size="1.7rem"
          onClick={onOpen}
        />
        <Image
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxSize="100%"
          h="8rem"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <BaseText fontSize="12px" py="0.5rem">
          ワンピース 41巻
        </BaseText>
      </BaseCardBody>
    </BaseCard>
  );
};
