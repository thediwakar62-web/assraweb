import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users2, HeartHandshake, Stethoscope, Hammer, ArrowRight } from 'lucide-react';
import educationImage from '@/assets/education-program.jpg';
import womenImage from '@/assets/women-empowerment.jpg';
import healthImage from '@/assets/health-awareness.jpg';

const Programs = () => {
  const programs = [
    {
      title: 'Education & Child Welfare',
      description: 'Providing quality education and creating safe learning environments for underprivileged children.',
      icon: BookOpen,
      image: educationImage,
      stats: '5,000+ children educated',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Women Empowerment',
      description: 'Skill development and leadership training to help women become financially independent.',
      icon: Users2,
      image: womenImage,
      stats: '2,500+ women trained',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Health Awareness',
      description: 'Comprehensive healthcare programs and awareness campaigns for community wellness.',
      icon: Stethoscope,
      image: healthImage,
      stats: '15,000+ health checkups',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Skill Development',
      description: 'Technical and vocational training programs to enhance employability and entrepreneurship.',
      icon: Hammer,
      image: educationImage,
      stats: '1,200+ skilled individuals',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Community Relief',
      description: 'Emergency relief and disaster management programs for vulnerable communities.',
      icon: HeartHandshake,
      image: healthImage,
      stats: '50+ relief operations',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Impact Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through targeted initiatives and community partnerships, we're creating 
            sustainable change across education, healthcare, skill development, and social welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={program.title} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-slide-up border-0 bg-card shadow-md overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{program.stats}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;