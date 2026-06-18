import { NextResponse } from 'next/server';

const locales = ['en', 'ru'];
const defaultLocale = 'en';

function getLocale(request) {
  const country = request.headers.get('x-vercel-ip-country');
  if (country) {
    const cisCountries = ['RU', 'KZ', 'BY', 'UA', 'UZ', 'KG', 'TJ', 'AM', 'AZ', 'MD'];
    if (cisCountries.includes(country)) return 'ru';
    return 'en';
  }

  const acceptLang = request.headers.get('accept-language');
  if (acceptLang && acceptLang.includes('ru')) {
    return 'ru';
  }

  return defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token');
    if (!token || token.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
  }

  if (
    pathname.startsWith(`/_next/`) ||
    pathname.startsWith(`/api/`) ||
    pathname.startsWith(`/admin`) ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|_vercel|api|favicon.ico).*)']
};
