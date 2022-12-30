import { Box, Flex, Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { TbEyeglass } from 'react-icons/tb';

import { BaseText } from '@/components/ui/text';
import { MENU_TYPE } from '@/types';

export type FooterProps = StackProps & {
  selectedMenu: MENU_TYPE;
  switchMenu: (menu: MENU_TYPE) => void;
};

export const Footer: FC<FooterProps> = ({
  selectedMenu,
  switchMenu,
  ...props
}) => {
  return (
    // TODO: フッターの高さ調整、画面サイズがおかしい
    <Flex
      bgColor="#FFFFFF"
      bottom="0"
      boxShadow="0 -5px 3px #d6d6d6"
      position="absolute"
      width="100%"
      {...props}
    >
      <Stack
        alignItems="center"
        opacity={selectedMenu === MENU_TYPE.UNREAD ? '100%' : '50%'}
        p="0.5rem"
        w="100%"
        onClick={() => switchMenu('unread')}
      >
        <AiTwotoneHome />
        <BaseText>ホーム</BaseText>
      </Stack>
      <Box bottom="2rem" left="9.5rem" position="absolute" textAlign="center">
        <IoIosAddCircle color="blue" size="5rem" />
      </Box>
      <Stack
        alignItems="center"
        opacity={selectedMenu === MENU_TYPE.WATCHLIST ? '100%' : '50%'}
        p="0.5rem"
        w="100%"
        onClick={() => switchMenu('watchList')}
      >
        <TbEyeglass />
        <BaseText>ウォッチリスト</BaseText>
      </Stack>
    </Flex>
  );
};
