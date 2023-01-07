import { ChevronLeftIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react';

import { SearchPageProps } from '@/components/page/search/hooks/useSearchPageHook';
import { BaseText } from '@/components/ui';

export const SearchContent: FC<SearchPageProps> = ({
  onSearch,
  setSearchTitle,
}) => {
  return (
    <>
      <HStack bgColor="#E6E6FA" boxShadow="0 5px 3px #d6d6d6" p="1rem">
        <ChevronLeftIcon boxSize="1.5rem" />
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
          />
          <Button onClick={onSearch}>検索</Button>
        </InputGroup>
      </HStack>
      <Radio colorScheme="red" size="lg" />
      <Stack>
        <BaseText>タイトル</BaseText>
        <BaseText>筆者</BaseText>
      </Stack>
      <Image
        h="8rem"
        src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8381/9784065128381.jpg?_ex=200x200"
      />
    </>
  );
};
