import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';
import { KeyboardEvent, useContext, useState } from 'react';

import { SearchResults } from '@/entity';
import { database } from '@/lib';
import { useSearchBooks } from '@/network/api/search/useSearch';
import { AuthContext } from '@/provider';

export const useSearchWatchListPageHook = () => {
  const { loginAccount, onFetchAccount } = useContext(AuthContext);
  const router = useRouter();

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
      refetch();
    }
  };

  const onRegister = (newComic: SearchResults) => {
    if (!loginAccount) return;

    const nowWatchLists = loginAccount.watchLists
      ? loginAccount.watchLists
      : [];

    const newWatchList = [...nowWatchLists, { ...newComic, volume: 0 }];

    const pathRef = ref(database, `user/${loginAccount.accountId}/watchLists`);
    set(pathRef, newWatchList);
    onFetchAccount(loginAccount.userId);
    router.push('/');
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
