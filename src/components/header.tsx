import Link from 'next/link';
import Logo from '@/components/logo';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LanguageChanger from './language-changer';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  
  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('products'), href: '#products' },
    { name: t('partners'), href: '#partners' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="h-16 w-16 text-primary" />
          <span className="font-headline text-3xl font-bold text-primary">Ad Time</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-body text-lg font-semibold text-foreground/70 transition-all hover:text-foreground hover:scale-110"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <LanguageChanger />
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageChanger />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Logo className="h-10 w-10 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">Ad Time</span>
                </Link>
                <nav>
                  <ul className="grid gap-2">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="flex w-full items-center py-2 text-lg font-semibold transition-all hover:scale-105 hover:translate-x-2"
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}