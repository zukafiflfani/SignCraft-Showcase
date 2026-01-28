import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

export default function About() {
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
              About Ad Time
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-body">
              Founded on the principles of creativity, quality, and unparalleled customer service, Ad Time has been the region's premier partner in visual branding for over a decade. We believe a great sign is more than just a marker; it's an identity, a first impression, and a promise of quality.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary/90">Our Mission</h3>
                <p className="text-foreground/70 font-body">To empower businesses by crafting visually compelling signs and decorations that capture attention, communicate brand identity, and create lasting impressions.</p>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary/90">Our Values</h3>
                <p className="text-foreground/70 font-body">We are committed to innovation, meticulous craftsmanship, and building strong, collaborative relationships with our clients to bring their vision to life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
