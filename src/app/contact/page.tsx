'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  projectType: z.string().min(1, { message: 'Please select a project type.' }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Large Heading */}
        <div className="max-w-3xl space-y-6 mb-20 md:mb-28">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Have a project?<br />Let's build something extraordinary.
          </h1>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Office info & Map */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Information block */}
            <div className="space-y-8">
              <h2 className="font-heading text-lg font-bold tracking-wider text-primary-text uppercase">
                Studio Lalitpur
              </h2>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent shrink-0 mt-1" size={18} />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Address
                    </span>
                    <p className="text-sm tracking-wide text-primary-text leading-relaxed">
                      Chakupat-11, Lalitpur, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-accent shrink-0 mt-1" size={18} />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Phone Number
                    </span>
                    <p className="text-sm tracking-wide text-primary-text">
                      <a href="tel:01-5269482" className="hover:text-accent transition-colors">
                        01-5269482
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-accent shrink-0 mt-1" size={18} />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Email Address
                    </span>
                    <p className="text-sm tracking-wide text-primary-text">
                      <a href="mailto:info@archiodesigns.com" className="hover:text-accent transition-colors">
                        info@archiodesigns.com
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Anchors */}
            <div className="space-y-4">
              <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-text">
                Connect
              </h3>
              <div className="flex space-x-8">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-secondary-text hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Premium Minimal Map Canvas Mock */}
            <div className="border border-border-custom bg-neutral-50 p-6 flex flex-col justify-between aspect-[16/10] w-full">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-accent font-semibold block">
                  Studio Coordinates
                </span>
                <h4 className="font-heading text-xs font-bold text-primary-text uppercase">
                  Latitude 27.6766° N &nbsp;|&nbsp; Longitude 85.3262° E
                </h4>
              </div>
              <div className="h-[1px] bg-border-custom my-4" />
              <p className="text-xs text-secondary-text leading-relaxed font-light">
                Our office is situated in the creative hub of Chakupat, Lalitpur, a 5-minute walk from Patan Dhoka. Visitor parking is available at the front gates.
              </p>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-white border border-border-custom p-8 md:p-12 space-y-8">
            <h2 className="font-heading text-lg font-bold tracking-wider text-primary-text uppercase border-b border-border-custom pb-4">
              Project Inquiry
            </h2>

            {submitSuccess && (
              <div className="bg-neutral-50 border border-accent/40 p-6 flex items-start space-x-3 text-primary-text">
                <CheckCircle className="text-accent shrink-0" size={20} />
                <div className="space-y-1">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider">
                    Message Sent Successfully
                  </p>
                  <p className="text-xs text-secondary-text leading-relaxed font-light">
                    Thank you for contacting Archio Designs. Our team will review your inquiry and get back to you within 2 business days.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full border-b border-border-custom bg-transparent py-3 text-sm text-primary-text focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={10} />
                      <span>{errors.name.message}</span>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full border-b border-border-custom bg-transparent py-3 text-sm text-primary-text focus:border-accent transition-colors"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={10} />
                      <span>{errors.email.message}</span>
                    </span>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="text"
                    {...register('phone')}
                    className="w-full border-b border-border-custom bg-transparent py-3 text-sm text-primary-text focus:border-accent transition-colors"
                    placeholder="Enter your number"
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={10} />
                      <span>{errors.phone.message}</span>
                    </span>
                  )}
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                    Project Typology *
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType')}
                    className="w-full border-b border-border-custom bg-transparent py-3 text-sm text-primary-text focus:border-accent transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="hospitality">Hospitality & Hotel</option>
                    <option value="interior">Interior Remodeling</option>
                    <option value="consultancy">Consultancy & Strategy</option>
                  </select>
                  {errors.projectType && (
                    <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={10} />
                      <span>{errors.projectType.message}</span>
                    </span>
                  )}
                </div>

              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label htmlFor="budget" className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                  Project Budget (Optional)
                </label>
                <input
                  id="budget"
                  type="text"
                  {...register('budget')}
                  className="w-full border-b border-border-custom bg-transparent py-3 text-sm text-primary-text focus:border-accent transition-colors"
                  placeholder="e.g. Range in NRs or USD"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                  Project Description & Requirements *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full border-b border-border-custom bg-transparent py-3 text-sm text-primary-text focus:border-accent transition-colors resize-none"
                  placeholder="Outline the details of the site, timeline, and scope..."
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
                    <AlertCircle size={10} />
                    <span>{errors.message.message}</span>
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-heading text-xs uppercase tracking-[0.25em] bg-primary-text text-white py-4 hover:bg-accent transition-all duration-300 disabled:bg-neutral-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : 'Submit Brief'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
