import { Stack } from '@chakra-ui/react';
import Image from 'next/image';

import { BaseText } from '@/components/ui/text';

export const NotRegisteredWatchListImage = () => {
  return (
    <Stack alignItems="center" mt="4rem">
      <Image
        alt="悩んでいる人の画像"
        height={200}
        src="/thinker.png"
        width={250}
      />
      <BaseText>新刊を通知したい漫画はありませんか？</BaseText>
    </Stack>
  );
};
