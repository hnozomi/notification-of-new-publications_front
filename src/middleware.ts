import { onAuthStateChanged } from 'firebase/auth';
import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/lib';

export async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  const originUrl = req.nextUrl.origin;
  const loginUrl = `${req.nextUrl.origin}/login/`;

  onAuthStateChanged(auth, async (user: any) => {
    console.log(user?.uid);
  });

  return NextResponse.next();
}

//matcherで指定したパスの時にmiddlewareを実行
export const config = {
  matcher: ['/', '/login', '/signup', '/searchUnreadBook', '/searchWatchList'],
};
