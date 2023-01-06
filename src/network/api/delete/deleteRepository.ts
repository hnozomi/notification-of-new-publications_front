import { useHttpMethod } from '@/network/useHttpMethod';

export const DeleteRepository = (endPoint?: string) => {
  const endpoint =
    '/Notificaion-of-newPublication_delete' + `${endPoint ?? ''}`;
  const { _delete } = useHttpMethod(endpoint);
  return { _delete };
};
