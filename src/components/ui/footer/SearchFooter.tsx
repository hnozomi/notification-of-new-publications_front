import { Button, Stack } from '@chakra-ui/react';

export const SearchFooter = () => {
  return (
    <Stack
      bgColor="#FFFFFF"
      bottom="0"
      boxShadow="0 -5px 3px #d6d6d6"
      justifyContent="center"
      position="absolute"
      py="0.5rem"
      width="100%"
    >
      <Button colorScheme="blue" mx="1rem">
        登録
      </Button>
    </Stack>
  );
};
