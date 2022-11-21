import { CardBody, CardBodyProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type BaseCardBodyProps = CardBodyProps & {
  children: ReactNode;
};

export const BaseCardBody: FC<BaseCardBodyProps> = ({ children, ...props }) => {
  return <CardBody {...props}>{children}</CardBody>;
};
