import { onValue, ref } from 'firebase/database';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { Account } from '@/entity';
import { database } from '@/lib';

export type LoginUserContextType = {
  loginAccount?: Account;
  onFetchAccount: VoidFunction;
};

export const AuthContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType,
);

type AuthProviderProps = { children: ReactNode };

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [loginAccount, setLoginAccount] = useState<Account>();
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    onFetchAccount();
  }, []);

  const onFetchAccount = () => {
    const pathRef = ref(database, 'user');
    onValue(
      pathRef,
      (snapshot) => {
        const account = snapshot.val();
        setLoginAccount(account);
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
