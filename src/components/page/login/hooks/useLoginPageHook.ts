import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useErrorToast, useSuccessToast } from '@/hooks';
import { auth } from '@/lib';

export const useLoginPageHook = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const errorToast = useErrorToast();
  const successToast = useSuccessToast();

  const login = async (e: any) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      const id = await result.user.getIdToken();

      await fetch('/api/session', {
        body: JSON.stringify({ id }),
        method: 'POST',
      });

      router.push('/');
      return {
        message: 'ログインに成功しました',
        open: false,
        status: 'login_success',
      };
    } catch (error) {
      return {
        message: 'ログインに失敗しました',
        open: true,
        status: 'error',
      };
    }
  };

  return { login, setEmail, setPassword };
};

export type LoginProps = ReturnType<typeof useLoginPageHook>;
