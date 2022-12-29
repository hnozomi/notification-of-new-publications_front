import { NextPage } from 'next';
import { memo } from 'react';

import { TopContent } from '@/components/page/top/components/TopContent';
import { useTopPageHook } from '@/components/page/top/hooks/useTopPageHook';
import { BaseLayout, Header } from '@/components/ui';
import { BaseFooter } from '@/components/ui/footer/Footer';

const TopPage: NextPage = memo(() => {
  return (
    <>
      <BaseLayout header={<Header />}>
        <TopContent {...useTopPageHook()} />
      </BaseLayout>
      <BaseFooter />
    </>
  );
});

TopPage.displayName = Object.keys({ TopPage }).join();

export default TopPage;
