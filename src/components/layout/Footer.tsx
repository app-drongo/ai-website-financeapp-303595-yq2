'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'FinanceFlow',
  tagline: 'Streamlined financial tools that grow with your business ambitions',
  description:
    'Empowering small businesses with scalable financial solutions that adapt to your growth journey.',
  copyright: '© 2024 FinanceFlow. All rights reserved.',

  companyLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
  ],

  legalLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ],

  socialLinks: [
    { title: 'Twitter', href: 'https://twitter.com' },
    { title: 'LinkedIn', href: 'https://linkedin.com' },
  ],

  contactInfo: {
    email: 'hello@financeflow.com',
    phone: '+1 (555) 123-4567',
    address: '123 Financial District, San Francisco, CA 94105',
  },
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <footer id="footer" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  <span data-editable="brandName">{config.brandName}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <span data-editable="tagline">{config.tagline}</span>
                </p>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                <span data-editable="description">{config.description}</span>
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span data-editable="contactInfo.email">{config.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span data-editable="contactInfo.phone">{config.contactInfo.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span data-editable="contactInfo.address">{config.contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].title`}>{link.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {config.legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`legalLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`legalLinks[${idx}].title`}>{link.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {config.socialLinks.map((social, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground"
                onClick={() => handleLinkClick(social.href)}
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.title}
              >
                {idx === 0 && <Twitter className="h-4 w-4" />}
                {idx === 1 && <Linkedin className="h-4 w-4" />}
                {idx === 2 && <Github className="h-4 w-4" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
