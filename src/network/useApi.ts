import { QueryKey, useMutation, useQuery } from '@tanstack/react-query';

import { useErrorToast } from '@/hooks/useErrorToast';
import { useSuccessToast } from '@/hooks/useSuccessToast';

export type PathQuery<RequestQuery, RequestBody = null> = {
  body?: RequestBody;
  path?: string;
  query?: RequestQuery;
};

export type Options = {
  enabled: boolean;
};

//参照系API
export const useAppQuery = <RequestQuery, Response>(
  key: QueryKey,
  request: (pathQuery?: PathQuery<RequestQuery>) => Promise<Response>,
  pathQuery?: PathQuery<RequestQuery>,
  options?: Options,
) => {
  const toast = useErrorToast();

  return useQuery({
    queryFn: async () => {
      return await send(request, toast, pathQuery);
    },
    queryKey: [`${key}.${request.name}`, pathQuery],
    ...options,
  });
};

//更新系API
export const useAppMutation = <RequestQuery, Response, RequestBody = null>(
  request: (
    pathQuery?: PathQuery<RequestQuery, RequestBody>,
  ) => Promise<Response>,
) => {
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation(
    async (pathQuery?: PathQuery<RequestQuery, RequestBody>) => {
      return await send(request, errorToast, pathQuery);
    },
    {
      onSuccess: (
        data: Response,
        variables: PathQuery<RequestQuery, RequestBody>,
        context: unknown,
      ) => successToast('データを更新しました', ''),
    },
  );
};

const send = async <RequestQuery, Response, RequestBody = null>(
  request: (
    pathQuery?: PathQuery<RequestQuery, RequestBody>,
  ) => Promise<Response>,
  toast: (title: string, description: string) => void,
  pathQuery?: PathQuery<RequestQuery, RequestBody>,
) => {
  try {
    console.debug(pathQuery);
    const response = await request(pathQuery);
    console.debug(response);
    return response;
  } catch (e: any) {
    toast(
      e.response.data.title ?? e.message,
      e.response.data.detail ?? e.message,
    );
    throw e;
  }
};
