import { UnreadBooks } from '@/entity/unreadBooks';
import { WatchLists } from '@/entity/watchLists';

export type Account = {
  unreadBooks: UnreadBooks;
  userId: string;
  watchLists: WatchLists;
};
