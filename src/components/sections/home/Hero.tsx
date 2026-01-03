'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Financial Growth Made Simple',
  subtitle:
    'Streamlined financial tools that grow with your business ambitions. Scale your operations with trusted, efficient solutions designed for modern businesses.',
  ctaText: 'Start Growing Today',
  ctaHref: '/get-started',
  secondaryCtaText: 'View Demo',
  secondaryCtaHref: '/demo',
  features: [
    {
      title: 'Scalable Solutions',
      description: 'Tools that adapt and grow with your business needs',
    },
    {
      title: 'Trusted Security',
      description: 'Enterprise-grade protection for your financial data',
    },
    {
      title: 'Strategic Insights',
      description: 'Transparent analytics to empower smart decisions',
    },
  ],
  stats: [
    { value: '10K+', label: 'Businesses Served' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '24/7', label: 'Expert Support' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span data-editable="title">{config.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={handlePrimaryCTA}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight
                className={`ml-2 h-5 w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleSecondaryCTA}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg"
            >
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {config.features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {idx === 0 && <TrendingUp className="h-8 w-8" />}
                      {idx === 1 && <Shield className="h-8 w-8" />}
                      {idx === 2 && <Zap className="h-8 w-8" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
