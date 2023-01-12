import { Flex, Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
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
      py="1rem"
      width="100%"
      {...props}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        opacity={selectedMenu === MENU_TYPE.UNREAD ? '100%' : '50%'}
        spacing="0"
        w="100%"
        onClick={() => switchMenu('unread')}
      >
        <AiTwotoneHome />
        <BaseText>ホーム</BaseText>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        opacity={selectedMenu === MENU_TYPE.WATCHLIST ? '100%' : '50%'}
        spacing="0"
        w="100%"
        onClick={() => switchMenu('watchList')}
      >
        <TbEyeglass />
        <BaseText>ウォッチリスト</BaseText>
      </Stack>
    </Flex>
  );
};
