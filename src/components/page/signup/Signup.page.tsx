import { memo } from 'react';

import { SignupContent } from '@/components/page/signup/components/SignupContent';
import { useSignupPageHook } from '@/components/page/signup/hooks/useSignupPageHook';

const SignupPage = memo(() => {
  return <SignupContent {...useSignupPageHook()} />;
});

SignupPage.displayName = Object.keys({ SignupPage }).join();

export default SignupPage;
