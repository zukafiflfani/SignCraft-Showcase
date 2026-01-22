import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SignOne } from "@/components/icons/sign-one";
import { SignTwo } from "@/components/icons/sign-two";
import { SignThree } from "@/components/icons/sign-three";
import { SignFour } from "@/components/icons/sign-four";

const products = [
  {
    title: "Classic Business Signage",
    description: "Elegant and timeless designs for storefronts and offices.",
    icon: <SignOne className="w-full h-auto" />,
  },
  {
    title: "Neon & LED Signs",
    description: "Bright and eye-catching signs to make your brand pop.",
    icon: <SignTwo className="w-full h-auto" />,
  },
  {
    title: "Minimalist Decor",
    description: "Modern and clean signs for a sophisticated look.",
    icon: <SignThree className="w-full h-auto" />,
  },
  {
    title: "Digital Displays",
    description: "Dynamic and programmable signs for modern advertising.",
    icon: <SignFour className="w-full h-auto" />,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Our Creations
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Explore a selection of our custom-made signs and decorations that have helped businesses shine.
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
