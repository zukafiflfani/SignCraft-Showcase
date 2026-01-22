import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-background py-24 sm:py-32 lg:py-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
          Crafting Impressions, Building Brands.
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-8 text-foreground/80 max-w-3xl mx-auto font-body">
          We design and create high-quality, impactful signs and decorations that make your business stand out. From concept to installation, we are your partners in visual excellence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="font-body">
            <Link href="#products">
              View Our Work <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="font-body">
            <Link href="#contact">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
