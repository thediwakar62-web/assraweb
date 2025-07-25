import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower underprivileged communities through education, skill development, and sustainable social programs that create lasting positive change.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A society where every individual has equal opportunities to thrive, regardless of their socio-economic background or circumstances.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, compassion, transparency, and sustainable development guide every action we take in serving our communities.'
    },
    {
      icon: Users,
      title: 'Our Approach',
      description: 'Community-driven solutions that involve local participation, ensuring programs are culturally appropriate and sustainably implemented.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About ASSRA
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ASSRA (Association for Social Service, Relief and Assistance) is a registered NGO 
              committed to creating meaningful change in the lives of India's most vulnerable populations. 
              Since our inception, we have been at the forefront of social transformation through 
              innovative programs and community partnerships.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">15+ Years of Impact</h4>
                  <p className="text-muted-foreground">Consistently delivering programs that create sustainable change in communities across India.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community-Centered Approach</h4>
                  <p className="text-muted-foreground">Working hand-in-hand with local communities to ensure culturally appropriate and effective solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transparent Operations</h4>
                  <p className="text-muted-foreground">Maintaining the highest standards of accountability and transparency in all our operations and funding.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group hover:shadow-lg transition-all duration-300 animate-slide-up border-0 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;