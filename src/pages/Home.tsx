/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import HeritageCounter from '../components/HeritageCounter';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-20 flex items-center overflow-hidden bg-slate-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left side: Heading */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-slate-400 leading-[0.95] tracking-tighter uppercase">
                BROKING SERVICES <br />
                <span className="text-mbs-blue">FOR YOU.</span>
              </h1>
            </motion.div>

            {/* Right side: Description & Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 space-y-8"
            >
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans font-light">
                MBS has been providing tailor-made insurance and financial products since 1978. 
                We empower our clients with customized solutions to meet their unique financial objectives.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/products" 
                  className="bg-mbs-blue text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-mbs-blue text-mbs-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-mbs-blue/10 transition-all font-sans whitespace-nowrap"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <HeritageCounter />
            </div>
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-slate-900 leading-tight"
              >
                Trust Built Over Decades
              </motion.h2>
              <p className="text-lg text-slate-600">
                With more than 45 years of experience, Metropolitan Broking Services has grown to meet the diverse needs of individuals and corporate clients alike.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-mbs-grey p-6 rounded-xl border-l-4 border-mbs-yellow"
                >
                  <ShieldCheck className="w-10 h-10 text-mbs-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2">Licensed & Regulated</h3>
                  <p className="text-sm text-slate-500">Registered under MAS as Licensed Financial Advisor & Exempt Insurance Broker.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-mbs-grey p-6 rounded-xl border-l-4 border-mbs-yellow"
                >
                  <TrendingUp className="w-10 h-10 text-mbs-blue mb-4" />
                  <h3 className="font-bold text-xl mb-2">Expert Advice</h3>
                  <p className="text-sm text-slate-500">Led by qualified professionals with 25-30+ years of industry experience.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Links / CTAs */}
      <section className="py-20 bg-mbs-blue text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tight"
          >
            How can we help you today?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Personal Insurance', desc: 'Secure your family\'s future', icon: Users, link: '/products' },
              { title: 'Corporate Schemes', desc: 'Protect your business assets', icon: ShieldCheck, link: '/products' },
              { title: 'Financial Planning', desc: 'Grow your wealth sustainably', icon: TrendingUp, link: '/products' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link 
                  to={card.link}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group block h-full"
                >
                  <card.icon className="w-12 h-12 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/70">{card.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
