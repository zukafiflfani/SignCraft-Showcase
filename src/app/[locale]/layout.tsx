import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { Metadata } from 'next';

// export const dynamic = 'force-static';

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ad Time - Visual Excellence & Custom Signage',
  description: 'Crafting high-quality, impactful signs and decorations to make your business stand out.',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={`${playfair.variable} ${ptSans.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
