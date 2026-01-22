import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactDetails = [
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+1-555-123-4567',
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email',
    value: 'contact@signcraft.com',
    href: 'mailto:contact@signcraft.com',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Address',
    value: '123 Signage St, Maker City, 12345',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Have a project in mind or need a quote? We're here to help you make a statement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail) => (
            <Card key={detail.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  {detail.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {detail.href ? (
                  <a href={detail.href} className="text-lg text-foreground/90 font-body hover:text-primary transition-colors">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-lg text-foreground/90 font-body">{detail.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
