import { KeyboardEvent, useState } from 'react';

import { SearchResults } from '@/entity';
import { useSearchBooks } from '@/network/api/search/useSearch';

export const useSearchUnreadBookPageHook = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedBook, setSelectedBook] = useState<SearchResults>({
    author: '',
    largeImageUrl: '',
    title: '',
  });

  const {
    data: books,
    fetchStatus,
    refetch,
    status,
  } = useSearchBooks(
    { query: { entity: 'unreadBook', title: searchTitle } },
    {
      enabled: false,
    },
  );

  const onSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(searchTitle);
      refetch();
    }
  };

  const onRegister = (newComic: SearchResults) => {
    console.log(books);
    console.log(newComic);
    // const pathRef = ref(database, 'user/unreadComic');
    // set(pathRef, item);
  };

  return {
    api: {
      books,
      fetchStatus,
      status,
    },
    onRegister,
    onSearch,
    selectedBook,
    setSearchTitle,
    setSelectedBook,
  };
};

export type SearchUnreadBookPageProps = ReturnType<
  typeof useSearchUnreadBookPageHook
>;
