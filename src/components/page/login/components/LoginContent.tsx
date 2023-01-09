import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';

import { LoginProps } from '@/components/page/login/hooks/useLoginPageHook';

export const LoginContent: FC<LoginProps> = ({
  login,
  setEmail,
  setPassword,
}) => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="gray.200"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100wh"
    >
      <Stack
        alignItems="center"
        flexDir="column"
        justifyContent="center"
        mb="2"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome To Login</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            <Stack
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              p="1rem"
              spacing={4}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="email address"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement color="gray.300" pointerEvents="none">
                    <FaLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                colorScheme="teal"
                variant="solid"
                width="full"
                onClick={(e) => login(e)}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{' '}
        <Link color="teal.500" href="signup">
          Signup
        </Link>
      </Box>
    </Flex>
  );
};
