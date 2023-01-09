import { UnreadComics } from '@/entity/unreadComics';
import { WatchLists } from '@/entity/watchLists';

export type Account = {
  accountId: string;
  unreadComics: UnreadComics[];
  userId: string;
  watchLists: WatchLists[];
};
