import { GridItem, GridItemProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseGridItemType = GridItemProps;

export const BaseGridItem: FC<BaseGridItemType> = ({ children, ...props }) => {
  return <GridItem {...props}>{children}</GridItem>;
};
