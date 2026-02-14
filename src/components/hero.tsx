import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative bg-background py-24 sm:py-32 lg:py-48 overflow-hidden">
      <Image
        src="/logo.svg"
        alt="Background Logo"
        fill
        className="object-contain opacity-5 scale-150"
        unoptimized
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
          {t('title')}
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-8 text-foreground/80 max-w-3xl mx-auto font-body">
          {t('description')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="font-body">
            <Link href="#products">
              {t('viewWork')} <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="font-body">
            <Link href="#contact">
              {t('getQuote')} <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}