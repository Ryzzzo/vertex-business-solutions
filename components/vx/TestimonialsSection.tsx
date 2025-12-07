'use client';

import { Star } from 'lucide-react';
import FadeUpSection from './FadeUpSection';
import TiltCard from './TiltCard';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  project: string;
  stars: number;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote: "You'll be hard pressed to find better value anywhere. Ryan's pricing is very fair for the product he delivers, and he's very communicative and responsive. He's extremely friendly and I really enjoyed working with him on my project!",
    name: 'Kevin M.',
    title: 'Government Contracting Consultant',
    project: 'Website Development',
    stars: 5,
    featured: true,
  },
  {
    quote: "Super responsive, did great work, and covered some gaps that I didn't see.",
    name: 'Gerry F.',
    title: 'App Developer',
    project: 'QA Testing',
    stars: 5,
  },
  {
    quote: "Ryan is an exceptionally diligent, thoughtful, and honest individual. He consistently approaches every portion of the project with care and attention to detail. I highly recommend Ryan to anyone looking for someone who embodies professionalism, respect, and genuine character.",
    name: 'Janelle B.',
    title: 'Business Owner',
    project: 'Research & Feedback',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue via-space-navy to-dark-blue opacity-50"></div>

      <div className="container relative z-10">
        <FadeUpSection>
          <div className="text-center mb-20">
            <h2 className="heading-2 text-glow mb-4">What Clients Say</h2>
            <p className="text-lg text-soft-gray max-w-2xl mx-auto">
              Real feedback from real projects
            </p>
          </div>
        </FadeUpSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <TiltCard key={index}>
              <div className={`glass rounded-[24px] p-8 h-full flex flex-col relative overflow-hidden ${
                testimonial.featured ? 'md:scale-105' : ''
              }`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-calm-blue/5 rounded-full blur-3xl"></div>

                <div className="relative mb-6">
                  <svg
                    className="absolute -top-2 -left-2 w-10 h-10 text-calm-blue/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm text-soft-gray font-semibold">
                    {testimonial.stars}.0
                  </span>
                </div>

                <blockquote className="text-base text-light-gray leading-relaxed mb-6 flex-grow">
                  {testimonial.quote}
                </blockquote>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold mb-1">{testimonial.name}</p>
                  <p className="text-sm text-soft-gray mb-1">{testimonial.title}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-calm-blue bg-calm-blue/10 px-3 py-1 rounded-full border border-calm-blue/30">
                      {testimonial.project}
                    </span>
                  </div>
                </div>

                {testimonial.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-calm-blue to-sky-blue px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                      Featured
                    </div>
                  </div>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        <FadeUpSection>
          <div className="flex items-center justify-center gap-3 text-sm text-soft-gray">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">Verified on Upwork</span>
            <span className="text-soft-gray/60">|</span>
            <span>All reviews are from real client projects</span>
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
