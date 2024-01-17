import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { getDictionary } from '@/get-dictionary'
import { Locale, i18n } from '@/i18n-config'

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({
	params,
}: {
	params: { lang: Locale }
}): Promise<Metadata> {
	const dictonnaires = await getDictionary(params.lang)
	const metaHome = dictonnaires['home']['meta']
	const baseUrl =
		process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://nzhinu.vercel.app'
	return {
		metadataBase: new URL(baseUrl),
		title: { template: '%s - Nzhinu Creation', absolute: metaHome.title },
		description: metaHome.description,
		alternates: {
			canonical: '/',
			languages: {
				fr: '/fr',
				en: '/en',
			},
		},
	}
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
	children: React.ReactNode
	params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
