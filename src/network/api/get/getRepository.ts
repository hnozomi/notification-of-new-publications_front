import { useHttpMethod } from '@/network/useHttpMethod';

export const getRepository = (endPoint?: string) => {
  const endpoint =
    '/Notificaion-of-newPublication_search' + `${endPoint ?? ''}`;
  const { get } = useHttpMethod(endpoint);
  return { get };
};
