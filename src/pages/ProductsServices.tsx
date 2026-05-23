/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Coins, Sparkles, Filter, ChevronDown, ChevronRight } from 'lucide-react';

type Category = 'Insurance' | 'Financial' | 'Tailor Made' | 'All';

export default function ProductsServices() {
  const [activeFilters, setActiveFilters] = useState<Category[]>(['All']);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleFilter = (filter: Category) => {
    if (filter === 'All') {
      setActiveFilters(['All']);
      return;
    }

    let newFilters = activeFilters.filter(f => f !== 'All');
    if (newFilters.includes(filter)) {
      newFilters = newFilters.filter(f => f !== filter);
    } else {
      newFilters = [...newFilters, filter];
    }

    if (newFilters.length === 0) {
      setActiveFilters(['All']);
    } else {
      setActiveFilters(newFilters);
    }
  };

  const filteredServices = activeFilters.includes('All')
    ? SERVICES
    : SERVICES.filter(s => activeFilters.includes(s.category as Category));

  const sections = [
    { title: 'Insurance Products', type: 'Insurance', icon: Shield },
    { title: 'Financial Products', type: 'Financial', icon: Coins },
    { title: 'Tailor Made Products', type: 'Tailor Made', icon: Sparkles },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-mbs-blue text-white py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Products & Services</h1>
          <p className="text-xl text-blue-100 max-w-4xl font-light leading-relaxed">
            At MBS, we’re all about building great partnerships by looking out for everyone—our clients, staff, and partners. 
            Because we really get what our clients need and have solid ties in the industry, we can handle all your insurance and financial planning in one place.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4 mb-12 bg-mbs-grey p-4 rounded-2xl border border-slate-200"
        >
          <div className="flex items-center gap-2 mr-4 text-slate-500 font-bold uppercase text-xs tracking-widest">
            <Filter className="w-4 h-4" /> Filter By:
          </div>
          {(['All', 'Insurance', 'Financial', 'Tailor Made'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeFilters.includes(cat)
                  ? 'bg-mbs-blue text-white ring-4 ring-mbs-blue/20'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          {sections
            .filter(section => activeFilters.includes('All') || activeFilters.includes(section.type as Category))
            .map((section, idx) => (
              <motion.div 
                layout
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
                  className="w-full flex items-center justify-between p-8 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-mbs-grey rounded-2xl flex items-center justify-center text-mbs-blue">
                      <section.icon className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-black text-slate-900 uppercase italic leading-none">{section.title}</h3>
                      <p className="text-slate-500 text-sm mt-2">
                        {filteredServices.filter(s => s.category === section.type).length} professional solutions available
                      </p>
                    </div>
                  </div>
                  {expandedSection === section.title ? <ChevronDown className="w-6 h-6 text-slate-400" /> : <ChevronRight className="w-6 h-6 text-slate-400" />}
                </button>

                <AnimatePresence>
                  {expandedSection === section.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white px-8 pb-8"
                    >
                      <div className="pt-4 border-t border-slate-100">
                        {section.type === 'Financial' ? (
                          <div className="space-y-8 mt-4">
                            {filteredServices
                              .filter(s => s.category === 'Financial')
                              .map((s, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="max-w-4xl bg-slate-50 p-6 rounded-2xl border border-slate-100"
                                >
                                  <h4 className="text-xl font-bold text-mbs-blue flex items-center gap-2">
                                    <ChevronDown className="w-4 h-4 text-mbs-yellow" /> {s.name}
                                  </h4>
                                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                    {getFinancialDesc(s.name)}
                                  </p>
                                </motion.div>
                              ))}
                          </div>
                        ) : (
                          <div className="space-y-8 mt-4 uppercase tracking-tight">
                             {/* Group by Subcategory */}
                             {Array.from(new Set(filteredServices.filter(s => s.category === section.type && s.subCategory).map(s => s.subCategory))).map((sub) => (
                               <div key={sub} className="space-y-4">
                                 <h4 className="text-mbs-blue font-black text-sm italic border-l-4 border-mbs-yellow pl-3">{sub}</h4>
                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                   {filteredServices.filter(s => s.category === section.type && s.subCategory === sub).map((s, i) => (
                                     <motion.div 
                                       key={i}
                                       initial={{ opacity: 0, scale: 0.9 }}
                                       animate={{ opacity: 1, scale: 1 }}
                                       transition={{ delay: i * 0.05 }}
                                     >
                                       <ServiceBadge name={s.name} />
                                     </motion.div>
                                   ))}
                                 </div>
                               </div>
                             ))}
                             
                             {/* Non-subcategory items */}
                             {filteredServices.filter(s => s.category === section.type && !s.subCategory).length > 0 && (
                               <div className="space-y-4">
                                 {Array.from(new Set(filteredServices.filter(s => s.category === section.type && s.subCategory))).length > 0 && (
                                   <h4 className="text-mbs-blue font-black text-sm italic border-l-4 border-mbs-yellow pl-3">General</h4>
                                 )}
                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                   {filteredServices.filter(s => s.category === section.type && !s.subCategory).map((s, i) => (
                                     <motion.div 
                                       key={i}
                                       initial={{ opacity: 0, scale: 0.9 }}
                                       animate={{ opacity: 1, scale: 1 }}
                                       transition={{ delay: i * 0.05 }}
                                     >
                                       <ServiceBadge name={s.name} />
                                     </motion.div>
                                   ))}
                                 </div>
                               </div>
                             )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm italic py-8 border-t border-slate-100">
            The above is not an exhaustive list. Please <Link to="/contact" className="text-mbs-blue font-bold underline">contact us</Link> for any others not listed above.
          </p>
        </div>
      </section>
    </div>
  );
}

function ServiceBadge({ name }: { name: string }) {
  return (
    <div className="bg-mbs-grey/50 p-4 rounded-xl flex items-center gap-3 border border-slate-100 hover:border-mbs-yellow transition-colors group">
      <div className="w-2 h-2 rounded-full bg-mbs-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="text-xs font-bold text-slate-700 tracking-tight">{name}</span>
    </div>
  );
}

function getFinancialDesc(name: string) {
  switch (name) {
    case 'Comprehensive Financial Planning':
      return 'Beginning with your goals in mind, we then analyse your current situation e.g. assess assets, liabilities, cash flow. taxes, insurance in force and estate planning documentation. This process reveals whether you can achieve your life goals. The next step is the development of a written financial plan, followed by implementation of prioritized recommendations.';
    case 'Investment Planning':
      return 'Advise on appropriate investment strategies and instruments in achieving your required rate of return and risk profile. Ongoing updating on the progress of the investment plan will be provided.';
    case 'Risk Management and Insurance Planning':
      return 'Preparing a comprehensive insurance program to ensure that you are properly and adequately insured against death, disability, long-term care and serious illnesses. Providing yearly review to ensure that the insurance program is still suitable for you.';
    case 'Tax and Estate Planning':
      return 'Co-ordinating with our associate lawyers and accountants to help you set up Trusts and Wills, and reduce the tax payable (legally) where possible.';
    default:
      return '';
  }
}
