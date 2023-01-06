import { axiosClient } from '@/network/axios';
import { PathQuery } from '@/network/useApi';

export const useHttpMethod = (endpoint: string) => {
  const get = async <RequestQuery, Response>(
    pathQuery?: PathQuery<RequestQuery>,
  ): Promise<Response> => {
    const response = await axiosClient.get<Response>(
      endpoint + `${pathQuery?.path ?? ''}`,
      {
        params: pathQuery?.query,
      },
    );
    return response.data;
  };

  const post = async <RequestQuery, Response, RequestBody = null>(
    pathQuery?: PathQuery<RequestQuery, RequestBody>,
  ): Promise<Response> => {
    const response = await axiosClient.post<Response>(
      endpoint + `${pathQuery?.path ?? ''}`,
      pathQuery?.body,
      { params: pathQuery?.query },
    );
    return response.data;
  };

  const put = async <RequestQuery, Response, RequestBody = null>(
    pathQuery?: PathQuery<RequestQuery, RequestBody>,
  ): Promise<Response> => {
    const response = await axiosClient.put<Response>(
      endpoint + `${pathQuery?.path ?? ''}`,
      pathQuery?.body,
      { params: pathQuery?.query },
    );
    return response.data;
  };

  const _delete = async <RequestQuery, Response>(
    pathQuery?: PathQuery<RequestQuery>,
  ): Promise<Response> => {
    const response = await axiosClient.delete<Response>(
      endpoint + `${pathQuery?.path ?? ''}`,
      {
        params: pathQuery?.query,
      },
    );
    return response.data;
  };

  return {
    _delete,
    get,
    post,
    put,
  };
};
