import { KeyboardEvent, useContext, useState } from 'react';

import { SearchResults } from '@/entity';
import { useSearchBooks } from '@/network/api/search/useSearch';
import { AuthContext } from '@/provider';

export const useSearchWatchListPageHook = () => {
  const { loginAccount } = useContext(AuthContext);

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

  const onRegister = (newComic: SearchResults) => {
    console.log(books);
    console.log(newComic);
    // const pathRef = ref(database, 'user/notifyComic');
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

export type SearchWatchListPageProps = ReturnType<
  typeof useSearchWatchListPageHook
>;
