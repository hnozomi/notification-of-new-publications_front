import { Image, Stack } from '@chakra-ui/react';

import { BaseText } from '@/components/ui/text';

export const NotRegisteredComicImage = () => {
  return (
    <Stack alignItems="center" mt="4rem">
      <Image boxSize="10rem" src="/reading.png" />
      <BaseText>読みたい漫画を登録しよう!!</BaseText>
    </Stack>
  );
};
