export const i18n = {
	defaultLocale: 'fr',
	locales: ['fr', 'en'],
	localeDetection: false
} as const

export type Locale = (typeof i18n)['locales'][number]
