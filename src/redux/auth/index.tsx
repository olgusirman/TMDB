import { createModel } from '@rematch/core';
import { RootModel } from '../store';
import { SuperAppUserDetail, User } from '../../types';
// import AuthManager from './api'

export type AuthState = {
  user: User;
};

const auth = createModel<RootModel>()({
  state: {
    user: {
      given_name: 'User',
    },
  } as AuthState,

  reducers: {
    setUser: (state: AuthState, user: User) => {
      return {
        ...state,
        user,
      };
    },
  },

  // effects: (dispatch) => ({
  //   //   async getUserAsync({ code }: any): Promise<any> {
  //   //   let response = await AuthManager.login({ code })
  //   //   dispatch.auth.setUser(response)
  //   //   dispatch.app.getAddressesAsync()
  //   //   dispatch.app.getBillsAsync()
  //   // }
  // }),
});

export default auth;
