import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, type NextRequest } from 'next/server'
import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {}
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales

	let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	)

	const locale = matchLocale(languages, locales, i18n.defaultLocale)

	return locale
}

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	const pathnameIsMissingLocale = i18n.locales.every(
		locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	)
	// TODO: Décommenter une fois que le problème en production est résolu.
	// 	const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
	// 	const cspHeader = `
	//     default-src 'self';
	//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
	//     style-src 'self'  'unsafe-inline';
	//     img-src 'self' blob: data:;
	//     font-src 'self';
	//     object-src 'none';
	//     base-uri 'self';
	//     form-action 'self';
	//     frame-ancestors 'none';
	//     block-all-mixed-content;
	//     upgrade-insecure-requests;
	// `
	// 	// Replace newline characters and spaces
	// 	const contentSecurityPolicyHeaderValue = cspHeader
	// 		.replace(/\s{2,}/g, ' ')
	// 		.trim()

	// 	const requestHeaders = new Headers(request.headers)
	// 	requestHeaders.set('x-nonce', nonce)

	// 	requestHeaders.set(
	// 		'Content-Security-Policy',
	// 		contentSecurityPolicyHeaderValue,
	// 	)

	// 	const response = NextResponse.next({
	// 		request: {
	// 			headers: requestHeaders,
	// 		},
	// 	})
	// 	response.headers.set(
	// 		'Content-Security-Policy',
	// 		contentSecurityPolicyHeaderValue,
	// 	)
	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request)

		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
				request.url,
			),
		)
	}
	
	// return response

	/* const session = await getToken({
		request,
		secret: process.env.NEXTAUTH_SECRET,
	});
	 if (!session && pathname === "/protected") {
		return NextResponse.redirect(new URL("/login", request.url));
	  } else if (session && (pathname === "/login" || pathname === "/register")) {
		return NextResponse.redirect(new URL("/protected", request.url));
	  } */ 
}

export const config = {
	matcher: [
		{
			source:
				'/((?!api|_next/static|_next/image|favicon.ico|icons|images|svg|entreprises|vercel|zeeka|zeeka-white|manifest.webmanifest|favicon|robots|next).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
}
