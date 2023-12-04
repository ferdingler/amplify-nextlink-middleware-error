import { NextResponse } from 'next/server';

const middleware = () => {
  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ['/((?!static|.*\\..*|_next|favicon.ico).*)', '/'],
};
