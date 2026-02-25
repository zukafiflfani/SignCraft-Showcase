import Image from "next/image";
import { useTranslations } from 'next-intl';

// 1. Clean list of partner data
const partners = [
  { name: "Coca Cola", src: '/companysLogos/Coca-Cola_logo.svg' },
  // { name: "Google", src: "/images/companysLogos/google.svg" },
  // { name: "Amazon", src: "/images/companysLogos/amazon.svg" },
  // { name: "Microsoft", src: "/images/companysLogos/microsoft.svg" },
  // { name: "Apple", src: "/images/companysLogos/apple.svg" },
  // { name: "Meta", src: "/images/companysLogos/meta.svg" },
];

export default function Partners() {
  const t = useTranslations('Partners');

  return (
    <section id="partners" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            {t('description')}
          </p>
        </div>

        {/* 2. Grid using Next.js Image component */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex items-center justify-center w-full max-w-[140px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={160} 
                height={80}
                className="max-h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}