import { useEffect } from 'react';
import AuthManager from './redux/auth/api';
import { User } from './types';
import { useAppDispatch } from './redux/store';

const InitApp = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loginAndFetchData = async (code: string) => {
      await AuthManager.login({ code }).then((res) => {
        const user: User | undefined = dispatch.auth.setUser(res).payload;
        if (user?.given_name) {
          localStorage.setItem('username', user?.given_name);
        }
      });
    };
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code') as string;
    const path = urlParams.get('path');
    if (!code) {
      AuthManager.getComposedUrl();
    } else if (code) {
      loginAndFetchData(code);
    }
    if (path != null) {
      localStorage.setItem('path', path);
    }
  }, [dispatch.auth]);
  return <></>;
};

export default InitApp;
