import { createUserWithEmailAndPassword } from 'firebase/auth';
import { push, ref } from 'firebase/database';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';

import { useErrorToast, useSuccessToast } from '@/hooks';
import { auth, database } from '@/lib';

export const useSignupPageHook = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const errorToast = useErrorToast();
  const successToast = useSuccessToast();

  const signup = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const firebaseUserId = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const newData = {
        unreadComics: [],
        userId: firebaseUserId.user.uid,
        watchLists: [],
      };

      const pathRef = ref(database, 'user');
      push(pathRef, newData);

      successToast('成功', '登録に成功しました');

      router.push('/login');
      return {
        message: '登録に成功しました',
        open: false,
        status: 'signup_success',
      };
    } catch (error: any) {
      errorToast('登録に失敗しました', error.message);
      switch (error.code) {
        case 'auth/email-already-in-use':
          return {
            message: 'すでにメールアドレスが存在します',
            open: true,
            status: 'error',
          };

        case 'auth/invalid-email':
          return {
            message: 'メールアドレスの形式が間違っています',
            open: true,
            status: 'error',
          };
        case 'auth/weak-password':
          return {
            message: 'パスワードは6桁以上にしてください',
            open: true,
            status: 'error',
          };
        default:
          return {
            message: '登録に失敗しました',
            open: true,
            status: 'error',
          };
      }
    }
  };

  return { setEmail, setPassword, signup };
};

export type SignupProps = ReturnType<typeof useSignupPageHook>;
