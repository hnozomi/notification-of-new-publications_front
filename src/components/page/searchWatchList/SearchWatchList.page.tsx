import { memo } from 'react';

import { SearchWatchListContent } from '@/components/page/searchWatchList/components/SearchWatchListContent';
import { useSearchWatchListPageHook } from '@/components/page/searchWatchList/hooks/useSearchWatchListPageHook';

const SearchWatchListPage = memo(() => {
  return <SearchWatchListContent {...useSearchWatchListPageHook()} />;
});

SearchWatchListPage.displayName = Object.keys({ SearchWatchListPage }).join();

export default SearchWatchListPage;
