import { ModalFooter, ModalFooterProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseModalFooterProps = ModalFooterProps;

export const BaseModalFooter: FC<BaseModalFooterProps> = ({
  children,
  ...props
}) => {
  return <ModalFooter {...props}>{children}</ModalFooter>;
};
