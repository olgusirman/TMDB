import { url } from '../../constants/apiUrls';
import { HttpRequest, RequestType } from '../../helpers/httpRequest';
import { GetComposedUrlType, LoginRequestType, User } from '../../types';

class AuthManager {
  public static getComposedUrl = async () => {
    const CALLBACK_URL = `${window.location.protocol}//${window.location.host}`;

    const response = await HttpRequest<any, GetComposedUrlType>({
      url: `${url.GET_COMPOSED_URL}?redirectUri=${CALLBACK_URL}`,
      method: RequestType.GET,
    });
    window.location.assign(response.composedUrl);
  };

  public static login = async ({ code }: { code: string }) => {
    const CALLBACK_URL = `${window.location.protocol}//${window.location.host}`;
    const response = await HttpRequest<LoginRequestType, User | any>({
      url: url.LOGIN,
      body: {
        code: code,
        redirectUri: `${CALLBACK_URL}`,
      },

      method: RequestType.POST,
    });
    if (!response.access_token) window.location.replace('/');
    localStorage.setItem('token', response.access_token);
    return response;
  };
}

export interface IGetAppVerionsRequest {
  page?: number | undefined;
  pageSize?: number | undefined;
  appName?: string;
}

export default AuthManager;
