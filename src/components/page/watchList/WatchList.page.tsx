import { NextPage } from 'next';
import { memo } from 'react';

import { WatchListContent } from '@/components/page/watchList/components/WatchListContent';
import { useWatchListHook } from '@/components/page/watchList/hooks/useWatchListPageHook';
import { BaseLayout, Header } from '@/components/ui';
import { BaseFooter } from '@/components/ui/footer/BaseFooter';

const WatchList: NextPage = memo(() => {
  return (
    <>
      <BaseLayout header={<Header />}>
        <WatchListContent {...useWatchListHook()} />
      </BaseLayout>
      <BaseFooter />
    </>
  );
});

WatchList.displayName = Object.keys({ WatchList }).join();

export default WatchList;
