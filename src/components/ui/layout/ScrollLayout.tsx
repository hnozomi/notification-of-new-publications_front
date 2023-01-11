import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

type Props = BoxProps;

export const ScrollLayout: FC<Props> = ({ children, ...props }) => {
  return (
    <Box h="80%" overflow="scroll" overflowX="hidden" {...props}>
      {children}
    </Box>
  );
};
