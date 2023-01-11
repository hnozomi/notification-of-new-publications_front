import { Image, Stack } from '@chakra-ui/react';

import { BaseText } from '@/components/ui/text';

export const NotRegisteredWatchListImage = () => {
  return (
    <Stack alignItems="center" mt="4rem">
      <Image boxSize="10rem" src="/thinker.png" />
      <BaseText>新刊を通知したい漫画はありませんか？</BaseText>
    </Stack>
  );
};
