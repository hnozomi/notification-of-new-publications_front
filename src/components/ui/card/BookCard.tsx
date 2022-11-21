import { CardProps, Image, Stack } from '@chakra-ui/react';

import { BaseCard } from '@/components/ui/card/BaseCard';
import { BaseCardBody } from '@/components/ui/card/BaseCardBody';
import { BaseText } from '@/components/ui/text';

type BookCardProps = CardProps;

export const BookCard = () => {
  return (
    <BaseCard>
      <BaseCardBody>
        <Image
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxSize="100%"
          h="8rem"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <Stack>
          <BaseText>Living room Sofa</BaseText>
          <BaseText>2022/11/11</BaseText>
        </Stack>
      </BaseCardBody>
    </BaseCard>
  );
};
