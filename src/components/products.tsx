
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SignOne } from "@/components/icons/sign-one";
import { SignTwo } from "@/components/icons/sign-two";
import { SignThree } from "@/components/icons/sign-three";
import { SignFour } from "@/components/icons/sign-four";
import { useTranslations } from 'next-intl';

export default function Products() {
  const t = useTranslations('Products');

  const products = [
    {
      title: t('items.classic.title'),
      description: t('items.classic.description'),
      icon: <SignOne className="w-full h-auto" />,
    },
    {
      title: t('items.neon.title'),
      description: t('items.neon.description'),
      icon: <SignTwo className="w-full h-auto" />,
    },
    {
      title: t('items.minimalist.title'),
      description: t('items.minimalist.description'),
      icon: <SignThree className="w-full h-auto" />,
    },
    {
      title: t('items.digital.title'),
      description: t('items.digital.description'),
      icon: <SignFour className="w-full h-auto" />,
    },
  ];

  return (
    <section id="products" className="py-24 sm:py-32 bg-secondary">
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
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="font-headline">{product.title}</CardTitle>
                      <CardDescription className="font-body">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-center justify-center p-6 bg-card">
                      {product.icon}
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
