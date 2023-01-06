import { useHttpMethod } from '@/network/useHttpMethod';

export const AddRepository = (endPoint?: string) => {
  const endpoint = '/Notificaion-of-newPublication_add' + `${endPoint ?? ''}`;
  const { post } = useHttpMethod(endpoint);
  return { post };
};
