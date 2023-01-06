import { SearchResults } from '@/entity';
import { SearchRepository } from '@/network/api/search/searchRepository';
import { PathQuery, useAppQuery } from '@/network/useApi';

const Repository = SearchRepository;

/**
 * 得意先マスタの一覧を取得する
 */
type SearchRequest = {
  entity: string;
  title: string;
};
type SearchResponse = SearchResults[];
export const useGetCustomers = (query: PathQuery<SearchRequest>) => {
  const { get } = Repository();
  const _get: () => Promise<SearchResponse> = get;

  return useAppQuery(Repository.name, _get, query);
};
