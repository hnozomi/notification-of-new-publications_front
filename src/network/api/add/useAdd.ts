import { Customer } from '@/entity';
import { CustomersRepository } from '@/network/api/customers/customersRepository';
import { PathQuery, useAppMutation, useAppQuery } from '@/network/useApi';
import { SearchResponse, TableSearch } from '@/types';

const Repository = CustomersRepository;

/**
 * 得意先マスタの一覧を取得する
 */
type GetCustomersRequest = {
  customerAddress?: string;
  customerName?: string;
} & TableSearch;
type GetCustomersResponse = SearchResponse<Customer[]>;
export const useGetCustomers = (query: PathQuery<GetCustomersRequest>) => {
  const { get } = Repository();
  const _get: () => Promise<GetCustomersResponse> = get;

  return useAppQuery(Repository.name, _get, query);
};

type ImportRequest = Customer[];
type ImportResponse = void;
export const useImportCustomer = () => {
  const { post } = Repository('/import');
  const _post: (
    pathQuery?: PathQuery<null, ImportRequest>,
  ) => Promise<ImportResponse> = post;

  return useAppMutation(_post);
};
