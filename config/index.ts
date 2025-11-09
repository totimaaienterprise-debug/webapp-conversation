import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
const disableSessionSameSiteEnv = process.env.NEXT_PUBLIC_DISABLE_SESSION_SAME_SITE

export const APP_INFO: AppInfo = {
  title: '〇〇クリニックAI',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
  avatar_url: 'https://mute-yellow-nqneatrsk1.edgeone.app/ChatGPT%20Image%202025年11月3日%2014_37_19.png',
  show_welcome_page: false,
  show_conversation_history: false,
  // iframe など別オリジンからアクセスする場合は SameSite=None; Secure を付けたクッキーが必要
  // NEXT_PUBLIC_DISABLE_SESSION_SAME_SITE=true を指定すると自動で切り替わります（デフォルトは true）
  disable_session_same_site: disableSessionSameSiteEnv
    ? disableSessionSameSiteEnv.toLowerCase() === 'true'
    : true,
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
