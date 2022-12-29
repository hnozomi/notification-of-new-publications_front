import { BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseText } from '@/components/ui/text';
import { MENU_TYPE } from '@/types';

type HeaderProps = BoxProps & {
  selectedMenu: MENU_TYPE;
};

export const Header: FC<HeaderProps> = ({ selectedMenu, ...props }) => {
  // MEMO このコンポーネントは具体的な実装を持っているが、特定のモデルに依存しないグローバルなコンポーネントのため例外的にUI以下に配置している
  return (
    <Flex as="header" bgColor="#DB8B33">
      <BaseText fontWeight="bold" m="1rem" textAlign="center" w="100%">
        {selectedMenu === MENU_TYPE.UNREAD
          ? '読んでいない本'
          : 'ウォッチリスト'}
      </BaseText>
    </Flex>
  );
};
