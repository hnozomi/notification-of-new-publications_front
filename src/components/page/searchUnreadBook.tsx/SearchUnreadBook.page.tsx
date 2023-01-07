import { memo } from 'react';

import { SearchUnreadBookContent } from '@/components/page/searchUnreadBook.tsx/components/SearchUnreadContent';
import { useSearchUnreadBookPageHook } from '@/components/page/searchUnreadBook.tsx/hooks/useSearchUnreadPageHook';

const SearchUnreadBookPage = memo(() => {
  return <SearchUnreadBookContent {...useSearchUnreadBookPageHook()} />;
});

SearchUnreadBookPage.displayName = Object.keys({ SearchUnreadBookPage }).join();

export default SearchUnreadBookPage;
