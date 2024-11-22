import React from 'react';
import { Github, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: Mail, value: 'hello.dravit@gmail.com', href: 'mailto:hello.dravit@gmail.com' },
    { icon: Phone, value: '+91 73055 97392', href: 'tel:+917305597392' },
    { icon: MapPin, value: 'Chennai, TN, India', href: null },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/codebydravit', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dravit', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/dravit.in/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-500 text-sm">
              Building the future through innovative AI solutions and architectural excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-indigo-600 text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div key={item.value} className="flex items-center text-gray-500">
                  <item.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">
                    {item.href ? (
                      <a href={item.href} className="hover:text-indigo-600">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Dravit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}