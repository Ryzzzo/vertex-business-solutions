'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp, Users, Clock, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'TechCorp Solutions',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Outstanding work! The CRM system transformed our sales process. Response time is incredibly fast, and the attention to detail is remarkable. Our team productivity increased by 40% within the first month.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'CTO',
    company: 'InnovateLabs',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Working with this developer was a game-changer. The real-time analytics dashboard exceeded expectations. Clean code, excellent documentation, and delivered ahead of schedule. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Product Manager',
    company: 'GlobalRetail Inc',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The inventory management system has been flawless. Reduced our stockouts by 50% and overstock by 35%. The predictive analytics feature is incredibly accurate. Best investment we made this year!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'Founder',
    company: 'StartupX',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Exceptional technical expertise combined with great communication. The project management suite replaced 8 different tools and saved us thousands monthly. Couldn\'t be happier with the results!',
    rating: 5,
  },
];

const stats = [
  {
    icon: TrendingUp,
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    color: 'from-electric-blue to-vibrant-cyan',
  },
  {
    icon: Users,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-vibrant-purple to-pink-500',
  },
  {
    icon: Clock,
    value: 14,
    suffix: '',
    label: 'Years Experience',
    color: 'from-vibrant-cyan to-electric-blue',
  },
  {
    icon: Award,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    color: 'from-electric-blue to-vibrant-purple',
  },
];

function CountUpAnimation({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-darker via-navy-dark to-navy-darker" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-purple rounded-full filter blur-[150px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass-dark rounded-3xl p-8 h-full flex flex-col relative overflow-hidden"
                >
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-electric-blue/20" />

                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-electric-blue/50"
                    />
                    <div>
                      <h4 className="font-bold text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonials[activeTestimonial].title},{' '}
                        {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                    "{testimonials[activeTestimonial].text}"
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-vibrant-purple to-vibrant-cyan" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-12 bg-gradient-to-r from-electric-blue to-vibrant-purple'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-dark rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-electric-blue/50 transition-shadow`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className={`text-4xl font-bold font-space gradient-text mb-2`}>
                    <CountUpAnimation value={stat.value} suffix={stat.suffix} />
                  </div>

                  <p className="text-gray-400 text-sm">{stat.label}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-vibrant-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
