import {
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import { FC, ReactElement, ReactNode } from 'react';

import {
  BaseModalBody,
  BaseModalContent,
  BaseModalFooter,
  BaseModalHeader,
} from '@/components/ui';

export type BaseModalProps = Omit<ModalProps, 'children'> & {
  children?: ReactNode;
  footer?: ReactElement;
  title?: string | ReactElement;
};

export const BaseModal: FC<BaseModalProps> = ({
  children,
  footer,
  isOpen,
  onClose,
  title,
  ...props
}) => {
  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose} {...props}>
      <ModalOverlay />
      <BaseModalContent width="90%">
        {title && <BaseModalHeader>{title}</BaseModalHeader>}
        <ModalCloseButton />

        <BaseModalBody>{children}</BaseModalBody>

        {footer && (
          <BaseModalFooter justifyContent="flex-start">
            {footer}
          </BaseModalFooter>
        )}
      </BaseModalContent>
    </Modal>
  );
};
