import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('language')?.value || 'en'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});