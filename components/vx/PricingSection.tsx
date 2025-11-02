'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Clock, DollarSign } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Essential',
    price: 'Starting at $1,500',
    description: 'Perfect for small teams getting started',
    features: [
      'Single dashboard or simple CRM',
      'Up to 3 custom views',
      'CSV export functionality',
      '30 days support',
    ],
  },
  {
    name: 'Professional',
    price: 'Starting at $2,800',
    description: 'For growing businesses',
    features: [
      'Multi-page application',
      'User authentication',
      'API integrations (1-2 services)',
      'Data visualization',
      '60 days support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    description: 'Complex workflows and automations',
    features: [
      'Advanced workflow automation',
      'Multiple integrations',
      'Custom reporting',
      'Ongoing maintenance available',
    ],
  },
];

const included = [
  'Modern, responsive design',
  'Cloud deployment and hosting setup',
  'Up to 2 rounds of revisions',
  'Direct communication (no account managers)',
  'Post-launch support',
];

const timelines = [
  { type: 'Simple dashboards', time: '1-2 weeks' },
  { type: 'Custom CRMs', time: '2-3 weeks' },
  { type: 'Complex integrations', time: '3-4 weeks' },
];

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-space-navy to-deep-space" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4 text-glow">Frequently Asked Questions</h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Transparent pricing and clear timelines
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Pricing Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <DollarSign className="w-7 h-7 text-calm-blue" />
              How much does a custom business application cost?
            </h3>

            <p className="text-light-gray mb-8 text-lg">
              We offer transparent pricing based on project complexity:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`glass rounded-[24px] p-8 hover-glow ${
                    tier.featured ? 'border-2 border-calm-blue' : ''
                  }`}
                >
                  {tier.featured && (
                    <div className="text-xs uppercase tracking-widest text-calm-blue mb-4 font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-calm-blue mb-3">{tier.price}</div>
                  <p className="text-soft-gray mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-light-gray">
                        <Check className="w-5 h-5 text-calm-blue mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-[24px] p-8"
            >
              <h4 className="text-xl font-semibold text-white mb-6">All projects include:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-light-gray">
                    <Check className="w-5 h-5 text-calm-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-soft-gray mt-6 text-center italic">
                Every project starts with a free consultation to understand your needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Clock className="w-7 h-7 text-calm-blue" />
              How long does development take?
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {timelines.map((timeline, index) => (
                <motion.div
                  key={timeline.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="glass rounded-[20px] p-8 text-center hover-glow"
                >
                  <div className="text-4xl font-bold text-calm-blue mb-3">{timeline.time}</div>
                  <div className="text-light-gray">{timeline.type}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
