import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Logo className="h-8 w-8 text-primary-foreground" />
            <span className="font-headline text-xl font-bold">SignCraft</span>
          </div>
          <p className="text-sm font-body text-primary-foreground/80">
            &copy; {new Date().getFullYear()} SignCraft Showcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
