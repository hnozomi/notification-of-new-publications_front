import { Card, CardProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type BaseCardProps = CardProps & {
  children: ReactNode;
};

export const BaseCard: FC<BaseCardProps> = ({ children, ...props }) => {
  return (
    <Card justifyContent="center" {...props}>
      {children}
    </Card>
  );
};
