import { memo } from 'react';

import { SearchContent } from '@/components/page/search/components/SearchContent';
import { useSearchPageHook } from '@/components/page/search/hooks/useSearchPageHook';

const SearchPage = memo(() => {
  return <SearchContent {...useSearchPageHook()} />;
});

SearchPage.displayName = Object.keys({ SearchPage }).join();

export default SearchPage;
