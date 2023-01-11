import { Stack } from '@chakra-ui/react';
import Image from 'next/image';

import { BaseText } from '@/components/ui/text';

export const NotRegisteredComicImage = () => {
  return (
    <Stack alignItems="center" mt="4rem">
      <Image
        alt="悩んでいる人の画像"
        height={200}
        priority={true}
        src="/reading.png"
        width={250}
      />
      <BaseText>読みたい漫画を登録しよう!!</BaseText>
    </Stack>
  );
};
