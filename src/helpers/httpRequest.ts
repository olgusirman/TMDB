// import { API_URL } from "../constants";

export enum RequestType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export const HttpRequest = async <Req, Res>({
  url,
  method = RequestType.GET,
  body,
  token,
}: {
  url: string;
  method?: RequestType | undefined;
  body?: Req | BodyInit | undefined;
  token?: boolean;
}): Promise<Res> => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
  });

  //token does not exist
  if (token && !localStorage.getItem('token')) {
    window.location.replace('/');
  }

  if (token) {
    myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    // `https://sozsenin-api-test.istanbulsenin.istanbul/${url}`,
    {
      body: JSON.stringify(body),
      headers: myHeaders,
      method,
    },
  );

  // token expired
  if (res.status === 401) {
    window.location.replace('/');
  }

  const result = await res.json();
  return result;
};
