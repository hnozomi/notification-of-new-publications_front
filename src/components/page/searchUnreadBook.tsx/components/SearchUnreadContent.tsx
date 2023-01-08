import { ChevronLeftIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Card,
  Center,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

import { SearchUnreadBookPageProps } from '@/components/page/searchUnreadBook.tsx/hooks/useSearchUnreadPageHook';
import { BaseText } from '@/components/ui';
import { SearchFooter } from '@/components/ui/footer/SearchFooter';

export const SearchUnreadBookContent: FC<SearchUnreadBookPageProps> = ({
  api,
  onRegister,
  onSearch,
  selectedBook,
  setSearchTitle,
  setSelectedBook,
}) => {
  return (
    <>
      <HStack bgColor="#E6E6FA" boxShadow="0 5px 3px #d6d6d6" p="1rem">
        <Link href="/">
          <ChevronLeftIcon boxSize="1.5rem" />
        </Link>
        <InputGroup w="90%">
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="black" />
          </InputLeftElement>
          <Input
            bgColor="white"
            borderColor="silver"
            placeholder="検索"
            type="text"
            variant="outline"
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={(e) => onSearch(e)}
          />
        </InputGroup>
      </HStack>
      {api.fetchStatus === 'fetching' && api.status === 'loading' ? (
        <Center h="10rem">
          <Spinner />
        </Center>
      ) : (
        <>
          {api.books?.length === 0 ? (
            <BaseText>検索結果: 0件</BaseText>
          ) : (
            api.books?.map((item, index) => (
              <Card
                bgColor={
                  item.title === selectedBook.title ? 'lavender' : undefined
                }
                boxShadow={
                  item.title === selectedBook.title
                    ? '3px 3px 7px rgba(0,0,0,0.4)'
                    : undefined
                }
                key={index}
                m="1rem"
                py="1rem"
                onClick={() => setSelectedBook(item)}
              >
                <HStack justifyContent="space-around">
                  <Stack>
                    <BaseText>{item.title}</BaseText>
                    <BaseText>{item.author}</BaseText>
                  </Stack>
                  <Image h="5rem" src={item.largeImageUrl} />
                </HStack>
              </Card>
            ))
          )}
        </>
      )}
      <SearchFooter comics={selectedBook} onRegister={onRegister} />
    </>
  );
};
