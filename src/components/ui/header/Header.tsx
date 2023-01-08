import { BoxProps, HStack } from '@chakra-ui/react';
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
    <HStack as="header" bgColor="#DB8B33" p="1rem">
      <BaseText fontWeight="bold" textAlign="center" w="100%">
        {selectedMenu === MENU_TYPE.UNREAD
          ? '読んでいない本'
          : 'ウォッチリスト'}
      </BaseText>
      <RiAddBoxLine
        size="2rem"
        onClick={() =>
          router.push(
            selectedMenu === MENU_TYPE.UNREAD
              ? 'searchUnreadBook'
              : 'searchWatchList',
          )
        }
      />
      {/* <Link
        href={
          selectedMenu === MENU_TYPE.UNREAD
            ? 'searchUnreadBook'
            : 'searchWatchList'
        }
      >
        <RiAddBoxLine size="2rem" />
      </Link> */}
    </HStack>
  );
};
