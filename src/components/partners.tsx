import { CompanyLogoOne } from "@/components/icons/company-logo-one";
import { CompanyLogoTwo } from "@/components/icons/company-logo-two";
import { CompanyLogoThree } from "@/components/icons/company-logo-three";
import { CompanyLogoFour } from "@/components/icons/company-logo-four";
import { CompanyLogoFive } from "@/components/icons/company-logo-five";
import { CompanyLogoSix } from "@/components/icons/company-logo-six";

const partners = [
  { name: "Innovate Inc.", logo: <CompanyLogoOne className="h-10 w-auto text-foreground/70" /> },
  { name: "Apex Solutions", logo: <CompanyLogoTwo className="h-10 w-auto text-foreground/70" /> },
  { name: "Quantum Corp.", logo: <CompanyLogoThree className="h-10 w-auto text-foreground/70" /> },
  { name: "Stellar Co.", logo: <CompanyLogoFour className="h-10 w-auto text-foreground/70" /> },
  { name: "Pioneer Ltd.", logo: <CompanyLogoFive className="h-10 w-auto text-foreground/70" /> },
  { name: "Vertex Group", logo: <CompanyLogoSix className="h-10 w-auto text-foreground/70" /> },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            We are proud to collaborate with a diverse range of industry leaders.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center" title={partner.name}>
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
