'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ka' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
      title={locale === 'en' ? 'Switch to Georgian' : 'გადართვა ინგლისურზე'}
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase font-bold">{locale}</span>
    </Button>
  );
}