import './globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { CookiesProvider } from 'next-client-cookies/server';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head />
      <body>
        <NextIntlClientProvider messages={messages}>
          <CookiesProvider>
            {children}
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
