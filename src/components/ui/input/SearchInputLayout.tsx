import { ChevronLeftIcon, SearchIcon } from '@chakra-ui/icons';
import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Link from 'next/link';
import { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';

type Props = {
  onSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
  setSearchComic: Dispatch<SetStateAction<string>>;
};

export const SearchInputLayout: FC<Props> = ({ onSearch, setSearchComic }) => {
  return (
    <HStack bgColor="#E6E6FA" boxShadow="0 5px 3px #d6d6d6" p="1rem">
      <Link href="/">
        <ChevronLeftIcon boxSize="1.5rem" />
      </Link>
      <InputGroup w="90%">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="black" />
        </InputLeftElement>
        <Input
          bgColor="white"
          borderColor="silver"
          placeholder="検索"
          onChange={(e) => setSearchComic(e.target.value)}
          onKeyDown={(e) => onSearch(e)}
        />
      </InputGroup>
    </HStack>
  );
};
