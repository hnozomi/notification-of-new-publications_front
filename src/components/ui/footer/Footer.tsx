import { Flex, Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FaBook } from 'react-icons/fa';
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
        <FaBook />
        <BaseText>読みたい漫画</BaseText>
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
