import { useState } from 'react';

import { useSearchBooks } from '@/network/api/search/useSearch';

export const useSearchPageHook = () => {
  const [searchTitle, setSearchTitle] = useState('');

  const { data, refetch } = useSearchBooks(
    { query: { entity: 'watchList', title: searchTitle } },
    {
      enabled: false,
    },
  );

  const onSearch = () => {
    console.log(searchTitle);
    refetch();
  };

  return { data, onSearch, setSearchTitle };
};

export type SearchPageProps = ReturnType<typeof useSearchPageHook>;
