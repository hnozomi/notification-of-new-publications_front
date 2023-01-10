import { Card, HStack, Image, Stack } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';

import { BaseText } from '@/components/ui';
import { SearchResults } from '@/entity';

type Props = {
  results?: SearchResults[];
  selectedBook: SearchResults;
  setSelectedBook: Dispatch<SetStateAction<SearchResults>>;
};

export const SearchResultList: FC<Props> = ({
  results,
  selectedBook,
  setSelectedBook,
}) => {
  return (
    <>
      {results?.map((item, index) => (
        <Card
          bgColor={item.title === selectedBook.title ? 'lavender' : undefined}
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
      ))}
    </>
  );
};
