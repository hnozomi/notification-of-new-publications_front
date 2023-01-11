import { onAuthStateChanged } from 'firebase/auth';
import {
  endAt,
  onValue,
  orderByChild,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { Account } from '@/entity';
import { auth, database } from '@/lib';

export type LoginUserContextType = {
  loginAccount?: Account;
  onFetchAccount: (uid: string) => void;
};

export const AuthContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType,
);

type AuthProviderProps = { children: ReactNode };

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [loginAccount, setLoginAccount] = useState<Account>();
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user: any) => {
      if (!user) setScreenLoading(true);
      user.uid && onFetchAccount(user.uid);
    });
  }, []);

  const onFetchAccount = (uid: string) => {
    const pathRef = query(
      ref(database, `user`),
      orderByChild('userId'),
      startAt(uid),
      endAt(uid),
    );

    onValue(
      pathRef,
      (snapshot) => {
        const account = snapshot.val();
        const key = Object.keys(account);

        const newAccount = { accountId: key[0], ...account[key[0]] };

        setLoginAccount(newAccount);
        setScreenLoading(true);
      },
      (error) => {
        console.log(error);
      },
      {
        onlyOnce: true,
      },
    );
  };

  return (
    <AuthContext.Provider
      value={{
        loginAccount,
        onFetchAccount,
      }}
    >
      {screenLoading && children}
    </AuthContext.Provider>
  );
};
