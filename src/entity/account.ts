import { UnreadComics } from '@/entity/unreadComics';
import { WatchLists } from '@/entity/watchLists';

export type Account = {
  unreadComics: UnreadComics;
  userId: string;
  watchLists: WatchLists;
};
