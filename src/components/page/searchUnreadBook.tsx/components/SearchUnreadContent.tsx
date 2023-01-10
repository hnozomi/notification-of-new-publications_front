import { FC } from 'react';

import { SearchResultList } from '@/components/model/SearchResultList';
import { SearchUnreadBookPageProps } from '@/components/page/searchUnreadBook.tsx/hooks/useSearchUnreadPageHook';
import {
  BaseSpinner,
  NotFoundComicImage,
  ScrollLayout,
  SearchFooter,
  SearchInputLayout,
} from '@/components/ui';

export const SearchUnreadBookContent: FC<SearchUnreadBookPageProps> = ({
  api,
  onRegister,
  onSearch,
  selectedBook,
  setSearchComic,
  setSelectedBook,
}) => {
  return (
    <>
      <SearchInputLayout setSearchComic={setSearchComic} onSearch={onSearch} />
      {api.fetchStatus === 'fetching' && api.status === 'loading' ? (
        <BaseSpinner />
      ) : (
        <ScrollLayout>
          {api.books?.length === 0 ? (
            <NotFoundComicImage />
          ) : (
            <SearchResultList
              results={api.books}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          )}
        </ScrollLayout>
      )}
      <SearchFooter comics={selectedBook} onRegister={onRegister} />
    </>
  );
};
