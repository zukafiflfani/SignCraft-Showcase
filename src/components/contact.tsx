
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  const contactDetails = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: t('phone'),
      value: '(+995) 511 19 12 52',
      href: 'tel:+995-511-19-12-52',
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: t('email'),
      value: 'adtime2026@gmail.com',
      href: 'mailto:adtime2026@gmail.com',
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t('address'),
      value: '6 Libani St, Tbilisi 0167, Georgia',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            {t('description')}
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
