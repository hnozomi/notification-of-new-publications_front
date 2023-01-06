import { useToast } from '@chakra-ui/react';

export const useErrorToast = () => {
  const chakraToast = useToast();

  const toast = (title: string, description: string) => {
    chakraToast({
      description: description,
      duration: 9000,
      isClosable: true,
      position: 'top',
      status: 'error',
      title: title,
    });
  };

  return toast;
};
