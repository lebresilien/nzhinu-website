import 'server-only'
import { type Locale } from './i18n-config'

const dictionaries = {
	fr: () => import('./dictionaries/fr').then(module => module.default),
	en: () => import('./dictionaries/en').then(module => module.default),
}

export async function getDictionary(locale: Locale) {
	return dictionaries[locale]?.() ?? dictionaries.fr()
}
