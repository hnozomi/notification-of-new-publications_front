import { Flex, Stack, StackProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { TbEyeglass } from 'react-icons/tb';

import { BaseText } from '@/components/ui/text';
import { MENU_TYPE } from '@/types';

export type FooterProps = StackProps & {
  onOpen: () => void;
  selectedMenu: MENU_TYPE;
  switchMenu: (menu: MENU_TYPE) => void;
};

export const Footer: FC<FooterProps> = ({
  onOpen,
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
      py="0.5rem"
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
      <Stack textAlign="center" onClick={onOpen}>
        <Link href="/search">
          <IoIosAddCircle size="3rem" />
        </Link>
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
