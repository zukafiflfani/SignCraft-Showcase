
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useTranslations } from 'next-intl';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 lg:h-auto lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
              {t('title')}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-body">
              {t('description')}
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary/90">{t('mission_title')}</h3>
                <p className="text-foreground/70 font-body">{t('mission_desc')}</p>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary/90">{t('values_title')}</h3>
                <p className="text-foreground/70 font-body">{t('values_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
