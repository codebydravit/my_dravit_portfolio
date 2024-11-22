import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello.dravit@gmail.com',
      href: 'mailto:hello.dravit@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 73055 97392',
      href: 'tel:+917305597392',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, TN, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/codebydravit',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dravit',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/dravit.in/',
      label: 'Instagram',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-xl text-gray-500 text-center">
            Have a project in mind? Let's discuss how we can work together.
          </p>

          {/* Contact Information */}
          <div className="mt-12 bg-white shadow rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              {contactInfo.map((item) => (
                <div key={item.label} className="p-6">
                  <div className="flex items-center">
                    <item.icon className="h-6 w-6 text-indigo-600" />
                    <h3 className="ml-3 text-sm font-medium text-gray-900">
                      {item.label}
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-gray-500">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-indigo-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 text-center mb-4">
              Connect with me
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-12 space-y-6 bg-white shadow rounded-lg p-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}