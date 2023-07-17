export interface User {
  token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  session_state: string;
  scope: string;
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string[];
  sub: string;
  typ: string;
  azp: string;
  nonce: string;
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  statusCode: number;
}

export interface SuperAppUserDetail {
  admin_role: any;
  birthdate: string;
  email: string;
  first_name: string;
  groups: string[];
  id: number;
  last_name: string;
  phone_number: any;
  status: string;
  stores: any;
}

export interface SuperAppUser {
  token: string;
  user: SuperAppUserDetail;
}

export interface GetComposedUrlType {
  clientId: string;
  authUrl: string;
  composedUrl: string;
}

export interface LoginRequestType {
  code: string;
  redirectUri: string;
}
export interface PdfRequestType {
  file: FormData;
  text: string;
  email: string;
}
export interface PdfResponseType {
  messageId: string;
  instanceId: string;
}
