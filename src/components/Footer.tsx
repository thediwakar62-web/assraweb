import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Volunteer', href: '#volunteer' },
    { label: 'News & Updates', href: '#news' }
  ];

  const programs = [
    { label: 'Education & Child Welfare', href: '#' },
    { label: 'Women Empowerment', href: '#' },
    { label: 'Health Awareness', href: '#' },
    { label: 'Skill Development', href: '#' },
    { label: 'Community Relief', href: '#' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ASSRA</h3>
                <p className="text-sm text-background/70">NGO</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Dedicated to social upliftment and relief work, empowering underprivileged 
              communities through education, skill development, and sustainable programs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-background hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <a
                    href={program.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm">
                    ASSRA Head Office<br />
                    123 Community Center<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">+91 11 2345 6789</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">info@assra.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 ASSRA NGO. All rights reserved. | Reg. No: NGO/2024/001
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Transparency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;