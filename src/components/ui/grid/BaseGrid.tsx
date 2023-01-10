import { Grid, GridProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseGridType = GridProps;

export const BaseGrid: FC<BaseGridType> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};
