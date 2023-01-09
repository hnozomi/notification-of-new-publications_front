import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';
import { KeyboardEvent, useContext, useState } from 'react';

import { SearchResults } from '@/entity';
import { database } from '@/lib';
import { useSearchBooks } from '@/network/api/search/useSearch';
import { AuthContext } from '@/provider';

export const useSearchUnreadBookPageHook = () => {
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
    { query: { entity: 'unreadBook', title: searchTitle } },
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

    const nowWatchLists = loginAccount.unreadComics
      ? loginAccount.watchLists
      : [];

    const newComics = [...nowWatchLists, newComic];
    const pathRef = ref(
      database,
      `user/${loginAccount.accountId}/unreadComics`,
    );
    set(pathRef, newComics);
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

export type SearchUnreadBookPageProps = ReturnType<
  typeof useSearchUnreadBookPageHook
>;
