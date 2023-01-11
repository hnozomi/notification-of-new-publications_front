import { memo } from 'react';

import { LoginContent } from '@/components/page/login/components/LoginContent';
import { useLoginPageHook } from '@/components/page/login/hooks/useLoginPageHook';

const LoginPage = memo(() => {
  return <LoginContent {...useLoginPageHook()} />;
});

LoginPage.displayName = Object.keys({ LoginPage }).join();

export default LoginPage;
