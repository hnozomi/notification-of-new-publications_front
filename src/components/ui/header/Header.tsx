import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

import { BaseText } from '@/components/ui/text';

type HeaderProps = BoxProps;

export const Header: FC<HeaderProps> = ({ ...props }) => {
  // MEMO このコンポーネントは具体的な実装を持っているが、特定のモデルに依存しないグローバルなコンポーネントのため例外的にUI以下に配置している
  return (
    // <HStack s bgColor="gray" h="4rem" justifyContent="space-between" {...props}>
    <Flex
      alignItems="center"
      as="header"
      bgColor="#DB8B33"
      justifyContent="space-between"
      px="10"
    >
      <Box>
        <BaseText m="1rem">ホーム</BaseText>
      </Box>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <AiFillPlusCircle />
      </IconContext.Provider>
    </Flex>
    // </HStack>
  );
};
