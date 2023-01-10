import { Image, Stack } from '@chakra-ui/react';

import { BaseText } from '@/components/ui/text';

export const NotFoundComicImage = () => {
  return (
    <Stack alignItems="center" mt="4rem">
      <Image boxSize="10rem" src="/notFound.png" />
      <BaseText>漫画が見つかりませんでした</BaseText>
    </Stack>
  );
};
