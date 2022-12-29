export const MENU_TYPE = {
  UNREAD: 'unread',
  WATCHLIST: 'watchList',
} as const;
export type MENU_TYPE = typeof MENU_TYPE[keyof typeof MENU_TYPE];
