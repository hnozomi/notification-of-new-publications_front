import { ModalContent, ModalContentProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseModalContentProps = ModalContentProps;

export const BaseModalContent: FC<BaseModalContentProps> = ({
  children,
  ...props
}) => {
  return <ModalContent {...props}>{children}</ModalContent>;
};
