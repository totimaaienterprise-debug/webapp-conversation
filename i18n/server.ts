import 'server-only'

import { cookies, headers } from 'next/headers'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import type { Locale } from '.'
import { i18n } from '.'

export const getLocaleOnServer = async (): Promise<Locale> => {
  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales

  let languages: string[] | undefined
  // get locale from cookie
  const localeCookie = (await cookies()).get('locale')
  languages = localeCookie?.value ? [localeCookie.value] : []

  if (!languages.length) {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    const headersList = await headers()
    headersList.forEach((value, key) => (negotiatorHeaders[key] = value))
    // Use negotiator and intl-localematcher to get best locale
    languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  }

  const sanitizedLanguages = (languages || [])
    .map(language => language.trim())
    .filter(Boolean)

  let canonicalLanguages: string[] = []

  if (sanitizedLanguages.length) {
    try {
      canonicalLanguages = Intl.getCanonicalLocales(sanitizedLanguages)
    }
    catch (error) {
      console.warn('[i18n] Failed to canonicalize locales from headers:', sanitizedLanguages, error)
    }
  }

  const candidates = canonicalLanguages.length ? canonicalLanguages : [i18n.defaultLocale]

  // match locale
  
  const matchedLocale = match(candidates, locales, i18n.defaultLocale) as Locale
  return matchedLocale
}
