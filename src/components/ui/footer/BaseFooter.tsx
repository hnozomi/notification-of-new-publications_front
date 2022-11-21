import { Box, Flex, StackProps } from '@chakra-ui/react';
import { FC } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { TbEyeglass } from 'react-icons/tb';

import { BaseText } from '@/components/ui/text';

export type BaseFooterProps = StackProps;

export const BaseFooter: FC<BaseFooterProps> = ({ ...props }) => {
  return (
    <Flex
      bgColor="#DB8B33"
      bottom="0"
      p="1rem"
      position="absolute"
      width="100%"
      {...props}
    >
      <Box textAlign="center" w="100%">
        <AiTwotoneHome />
        <BaseText m="0">ホーム</BaseText>
      </Box>
      <Box textAlign="center" w="100%">
        <TbEyeglass />
        <BaseText m="0"> ウォッチリスト</BaseText>
      </Box>
    </Flex>
  );
};
