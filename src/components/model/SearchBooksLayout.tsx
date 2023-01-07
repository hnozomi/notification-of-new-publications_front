import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export const SearchBooksLayout = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none" />
        <PhoneIcon color="gray.300" />
        <Input placeholder="Phone number" type="tel" />
      </InputGroup>
    </Box>
  );
};
