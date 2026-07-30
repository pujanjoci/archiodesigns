'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  projectType: z.string().min(1, { message: 'Please select a project type.' }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Gmail / Material Floating Label Input Component
interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  register: any;
  error?: string;
  value?: string;
}

function FloatingInput({ id, label, type = 'text', register, error, value = '' }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isFocused || (value && value.length > 0);

  return (
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-heading uppercase tracking-wider ${
          isActive
            ? 'top-0 text-[10px] text-accent font-semibold'
            : 'top-7 text-xs text-secondary-text font-normal'
        }`}
      >
        {label} *
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          register(id).onBlur(e);
        }}
        className="w-full border-b border-border-custom bg-transparent py-2.5 text-xs sm:text-sm text-primary-text focus:border-accent transition-colors rounded-none outline-none"
      />
      {error && (
        <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
          <AlertCircle size={10} />
          <span>{error}</span>
        </span>
      )}
    </div>
  );
}

// Floating Textarea
function FloatingTextarea({ id, label, register, error, value = '' }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isFocused || (value && value.length > 0);

  return (
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-heading uppercase tracking-wider ${
          isActive
            ? 'top-0 text-[10px] text-accent font-semibold'
            : 'top-7 text-xs text-secondary-text font-normal'
        }`}
      >
        {label} *
      </label>
      <textarea
        id={id}
        rows={4}
        {...register(id)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          register(id).onBlur(e);
        }}
        className="w-full border-b border-border-custom bg-transparent py-2.5 text-xs sm:text-sm text-primary-text focus:border-accent transition-colors rounded-none outline-none resize-none"
      />
      {error && (
        <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
          <AlertCircle size={10} />
          <span>{error}</span>
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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

  const formValues = watch();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };

  return (
    <div className="bg-white text-primary-text min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Large Heading */}
        <div className="max-w-3xl space-y-6 mb-16 md:mb-24">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Have a project?<br />Let's build something extraordinary.
          </h1>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-light">
            We partner with visionary clients to shape custom physical environments across residential, commercial, hospitality, and interior domains.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Office Info & Open Source Map */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Information Block */}
            <div className="space-y-8 bg-[#FAFAFA] p-8 border border-border-custom shadow-sm rounded-none">
              <h2 className="font-heading text-lg font-bold tracking-wider text-primary-text uppercase border-b border-border-custom pb-4">
                Studio Lalitpur
              </h2>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-white border border-border-custom text-accent shrink-0 rounded-none">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Address
                    </span>
                    <p className="text-xs sm:text-sm tracking-wide text-primary-text leading-relaxed font-medium">
                      Chakupat-11, Lalitpur, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-white border border-border-custom text-accent shrink-0 rounded-none">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Phone Line
                    </span>
                    <p className="text-xs sm:text-sm tracking-wide text-primary-text font-medium">
                      <a href="tel:01-5269482" className="hover:text-accent transition-colors">
                        +977 01-5269482
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-white border border-border-custom text-accent shrink-0 rounded-none">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Email Address
                    </span>
                    <p className="text-xs sm:text-sm tracking-wide text-primary-text font-medium">
                      <a href="mailto:info@archiodesigns.com" className="hover:text-accent transition-colors">
                        info@archiodesigns.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-white border border-border-custom text-accent shrink-0 rounded-none">
                    <Clock size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                      Working Hours
                    </span>
                    <p className="text-xs sm:text-sm tracking-wide text-primary-text font-medium">
                      Sunday — Friday: 9:30 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* OpenStreetMap Interactive Container */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-xs uppercase tracking-widest text-primary-text font-bold">
                  Open Source Studio Location
                </span>
                <span className="font-mono text-[10px] text-accent">PATAN, LALITPUR</span>
              </div>

              <div className="relative aspect-[16/10] w-full border border-border-custom bg-neutral-100 shadow-md overflow-hidden rounded-none">
                <iframe
                  title="Archio Designs Studio Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=85.3162%2C27.6666%2C85.3362%2C27.6866&amp;layer=mapnik&amp;marker=27.6766%2C85.3262"
                  className="filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <a
                href="https://www.openstreetmap.org/?mlat=27.6766&amp;mlon=85.3262#map=16/27.6766/85.3262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] font-mono text-accent hover:underline uppercase tracking-wider"
              >
                View Larger Map on OpenStreetMap →
              </a>
            </div>

          </div>

          {/* Right Column: Gmail-Style Floating Input Contact Form */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-border-custom p-8 md:p-12 shadow-xl space-y-8 rounded-none">
            <h2 className="font-heading text-lg font-bold tracking-wider text-primary-text uppercase border-b border-border-custom pb-4">
              Start Project Briefing
            </h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-accent/10 border border-accent p-6 flex items-start space-x-3 text-primary-text rounded-none"
              >
                <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                <div className="space-y-1">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary-text">
                    Inquiry Received
                  </p>
                  <p className="text-xs text-secondary-text leading-relaxed font-light">
                    Thank you for reaching out to Archio Designs. Our senior design team will review your project requirements and connect with you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name */}
                <FloatingInput
                  id="name"
                  label="Full Name"
                  register={register}
                  error={errors.name?.message}
                  value={formValues.name}
                />

                {/* Email */}
                <FloatingInput
                  id="email"
                  label="Email Address"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  value={formValues.email}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone */}
                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  register={register}
                  error={errors.phone?.message}
                  value={formValues.phone}
                />

                {/* Project Typology Select */}
                <div className="space-y-2 pt-4">
                  <label htmlFor="projectType" className="text-[10px] uppercase tracking-wider text-accent font-semibold block">
                    Project Typology *
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType')}
                    className="w-full border-b border-border-custom bg-transparent py-2.5 text-xs sm:text-sm text-primary-text focus:border-accent transition-colors rounded-none outline-none"
                  >
                    <option value="">Select Category</option>
                    <option value="Residential Architecture">Residential Architecture</option>
                    <option value="Commercial & Retail">Commercial & Retail</option>
                    <option value="Hospitality & Hotel Design">Hospitality & Hotel Design</option>
                    <option value="Interior Design & Styling">Interior Design & Styling</option>
                    <option value="Renovation & Adaptive Reuse">Renovation & Adaptive Reuse</option>
                    <option value="Master Planning & Consultancy">Master Planning & Consultancy</option>
                  </select>
                  {errors.projectType && (
                    <span className="text-[10px] text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={10} />
                      <span>{errors.projectType.message}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Investment Range Selection */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-wider text-secondary-text font-semibold block">
                  Estimated Investment Range (NPR)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    '< 50 Lakhs',
                    '50 Lakhs — 1.5 Crore',
                    '1.5 Crore — 3 Crore',
                    '3 Crore+',
                  ].map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setValue('budget', range)}
                      className={`px-4 py-2 text-xs font-heading tracking-wider border transition-all duration-300 rounded-none ${
                        formValues.budget === range
                          ? 'bg-primary-text text-white border-primary-text shadow-md'
                          : 'bg-white text-secondary-text border-border-custom hover:border-accent hover:text-primary-text'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <FloatingTextarea
                id="message"
                label="Project Brief & Requirements"
                register={register}
                error={errors.message?.message}
                value={formValues.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-3 bg-primary-text hover:bg-accent text-white py-4 px-8 font-heading text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl disabled:opacity-50 rounded-none"
              >
                <span>{isSubmitting ? 'Sending Brief...' : 'Submit Project Brief'}</span>
                <Send size={14} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
