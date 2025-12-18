'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Code, Rocket, Shield } from 'lucide-react';
import FadeUpSection from './FadeUpSection';

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Discovery Call',
    description: 'Free 30-minute consultation to understand your needs and goals',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Proposal',
    description: 'Clear scope, fixed price, and realistic timeline - no surprises',
  },
  {
    number: 3,
    icon: Code,
    title: 'Build',
    description: 'Weekly progress updates. Your feedback shapes the final product',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Launch',
    description: 'Deployment, training, and complete handoff documentation',
  },
  {
    number: 5,
    icon: Shield,
    title: 'Support',
    description: '30-60 days of included support for adjustments and questions',
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="process" className="relative py-32 overflow-hidden bg-space-navy">
      <div className="container relative z-10">
        <FadeUpSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple, Transparent Process
              </h2>
              <p className="text-xl text-soft-gray max-w-2xl mx-auto">
                From first call to final launch, here's exactly what to expect
              </p>
            </motion.div>
          </div>
        </FadeUpSection>

        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute top-[120px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-calm-blue/20 via-calm-blue to-calm-blue/20" />

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="glass rounded-2xl p-8 h-full hover:border-calm-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-calm-blue/20 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          <div className="w-24 h-24 rounded-full glass-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-10 h-10 text-calm-blue" strokeWidth={1.5} />
                          </div>

                          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-calm-blue to-sky-blue flex items-center justify-center shadow-lg shadow-calm-blue/30">
                            <span className="text-white font-bold text-lg">{step.number}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-calm-blue transition-colors duration-300">
                          {step.title}
                        </h3>

                        <p className="text-soft-gray leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 hover:border-calm-blue/50 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full glass-subtle flex items-center justify-center">
                        <Icon className="w-7 h-7 text-calm-blue" strokeWidth={1.5} />
                      </div>

                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-calm-blue to-sky-blue flex items-center justify-center shadow-lg shadow-calm-blue/30">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>

                      <p className="text-soft-gray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <div className="w-[2px] h-6 bg-gradient-to-b from-calm-blue to-calm-blue/20" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-soft-gray text-lg">
            Ready to get started? <a href="#contact" className="text-calm-blue hover:text-sky-blue transition-colors duration-300 font-semibold">Book your free consultation →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
