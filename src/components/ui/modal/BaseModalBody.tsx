import { ModalBody, ModalBodyProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseModalBodyProps = ModalBodyProps;

export const BaseModalBody: FC<BaseModalBodyProps> = ({
  children,
  ...props
}) => {
  return <ModalBody {...props}>{children}</ModalBody>;
};
