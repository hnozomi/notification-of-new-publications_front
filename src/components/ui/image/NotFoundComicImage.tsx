import { Stack } from '@chakra-ui/react';
import Image from 'next/image';

import { BaseText } from '@/components/ui/text';

export const NotFoundComicImage = () => {
  return (
    <Stack alignItems="center" mt="4rem">
      <Image
        alt="悩んでいる人の画像"
        height={200}
        src="/notFound.png"
        width={250}
      />
      <BaseText>漫画が見つかりませんでした</BaseText>
    </Stack>
  );
};
