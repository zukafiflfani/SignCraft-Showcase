
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function OurWork() {
  const t = useTranslations('OurWork');
  const images = [
    {

      src: '/images/CarLed.webp',
      alt: "alt text for classic clock",
    },
    {

      src: '/images/Hart.webp',
      alt: "alt text for minimalist clock",
    },
    {

      src: '/images/Cockakola.webp',
      alt: "alt text for neon clock",
    },

    {

      src: '/images/Shawarma.webp',
      alt: "alt text for digital clock",
    },
    {
      src: '/images/Stand2.webp',
      alt: "alt text for digital clock",
    },
    {
      src: '/images/jino.webp',
      alt: "alt text for digital clock",
    },
    {
      src: '/images/bigLogoCocacola.webp',
      alt: "alt text for digital clock",
    },
    {
      src: '/images/Mtis.webp',
      alt: "alt text for digital clock",
    },
  ];

  return (
    <section id="our-work" title="caruselImag" className="pb-8 sm:py-8 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            {t('description')}
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col overflow-htitleden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="flex-grow p-6 bg-card">
                      <div className="relative w-full h-56 sm:h-64 flex items-center justify-center">
                        <Image src={image.src} alt={image.alt} fill className="object-contain" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
