import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'ASSRA Head Office\n123 Community Center\nNew Delhi, India 110001'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 11 2345 6789\n+91 98765 43210'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@assra.org\nvolunteer@assra.org'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Contact us to learn more about our programs, 
            volunteer opportunities, or partnership possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={info.title}
                className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up border-0 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line text-sm">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in border-0 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Map/Additional Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Join Our Mission</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Volunteer Opportunities</h4>
                      <p className="text-muted-foreground text-sm">Join our team of dedicated volunteers and make a direct impact in your community.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Corporate Partnerships</h4>
                      <p className="text-muted-foreground text-sm">Partner with us for CSR initiatives and sustainable community development programs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Donation Information</h4>
                      <p className="text-muted-foreground text-sm">Learn about our transparent donation process and how your contribution creates impact.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h3>
                <p className="mb-6 opacity-90">
                  Every action counts. Whether you volunteer, donate, or spread awareness, 
                  you're helping us build stronger communities.
                </p>
                <Button 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Get Involved Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;