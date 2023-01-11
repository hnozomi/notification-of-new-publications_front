import { BoxProps, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { RiAddBoxLine } from 'react-icons/ri';

import { BaseText } from '@/components/ui/text';
import { MENU_TYPE } from '@/types';

type HeaderProps = BoxProps & {
  selectedMenu: MENU_TYPE;
};

export const Header: FC<HeaderProps> = ({ selectedMenu, ...props }) => {
  const router = useRouter();
  // MEMO このコンポーネントは具体的な実装を持っているが、特定のモデルに依存しないグローバルなコンポーネントのため例外的にUI以下に配置している
  return (
    <HStack as="header" bgColor="#504CF9" p="1rem">
      <BaseText color="white" fontWeight="bold" w="100%">
        {selectedMenu === MENU_TYPE.UNREAD ? '読みたい漫画' : 'ウォッチリスト'}
      </BaseText>
      <Link
        href={
          selectedMenu === MENU_TYPE.UNREAD
            ? 'searchUnreadBook'
            : 'searchWatchList'
        }
      >
        <RiAddBoxLine color="white" size="2rem" />
      </Link>
    </HStack>
  );
};
