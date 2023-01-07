import { KeyboardEvent, useState } from 'react';

import { SearchResults } from '@/entity';
import { useSearchBooks } from '@/network/api/search/useSearch';

export const useSearchWatchListPageHook = () => {
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
    { query: { entity: 'watchList', title: searchTitle } },
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

  return {
    api: {
      books,
      fetchStatus,
      status,
    },
    onSearch,
    selectedBook,
    setSearchTitle,
    setSelectedBook,
  };
};

export type SearchWatchListPageProps = ReturnType<
  typeof useSearchWatchListPageHook
>;
