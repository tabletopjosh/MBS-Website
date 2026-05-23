/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TEAM } from '../constants';
import { Target, Eye, Award, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import lionelPhoto from '../components/Lionel.png';
import bettyPhoto from '../components/Betty.png';

export default function AboutUs() {
  const values = [
    'To serve our Clients Courteously',
    'To serve our Colleagues Co-operatively',
    'To serve our Company Conscientiously',
  ];

  const getMemberPhoto = (name: string) => {
    if (name.toLowerCase().includes('lionel')) return lionelPhoto;
    if (name.toLowerCase().includes('betty')) return bettyPhoto;
    return '';
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-mbs-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black uppercase italic tracking-wider"
          >
            About MBS
          </motion.h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Providing reliable and well-suited insurance and financial products since 1978.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-mbs-yellow flex items-center justify-center rounded-full text-white">1</span>
                  What is MBS?
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                    Metropolitan Broking Services (MBS) was formed in 1978 as Insurance Brokers. This Company was formed to meet the growing and diverse needs of our clients.
                  </p>
                  <p>
                    In its initial stages, MBS concentrated on Life Insurance. As the demands of our clients grew, MBS expanded its services to include Non-Life products. From there, MBS moved into Employee Benefit Schemes, Corporate clients and other business insurance needs. The rest is history.
                  </p>
                  <p>
                    MBS is now registered under the Monetary Authority of Singapore (MAS) as a Licensed Financial Advisor and Exempt Insurance Broker.
                  </p>
                </div>
              </div>

              <div className="bg-mbs-grey p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Our Client Base Includes:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  {[
                    'Individuals', 'Corporate Clients', 'Senior Citizens & Retirees',
                    'Churches', 'Christian Organisations', 'Halfway Houses',
                    'Non profit Organisations', 'Community Service Organisations'
                  ].map((client, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-mbs-blue" /> {client}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-mbs-blue/10 rounded-xl flex items-center justify-center mb-6 text-mbs-blue">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To continue to strengthen our relationship with our clients and would-be clients by providing them with new and improved services conducive for short and long term financial planning needs. We will empower our clients with customised solutions to organise, plan and implement financial plans in meeting their financial objectives.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-mbs-yellow/20 rounded-xl flex items-center justify-center mb-6 text-mbs-yellow">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To be among the top players in the financial planning and advisory services industry in Singapore. To provide our clients' Insurance and Financial Planning services under one roof. To be known for providing high quality, reliable and well suited products and services with integrity to our clients.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Values and MAS Licensing in 2 Columns on large screens */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-center shadow-lg"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-6 italic">The 6Cs of Our Company</h3>
              <div className="space-y-4">
                {values.map((v, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-mbs-yellow rounded-full flex items-center justify-center text-xs text-slate-900 font-bold shrink-0 mt-1">C</div>
                    <p className="font-medium text-lg leading-snug">{v}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* MAS Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-mbs-blue text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-center"
            >
               <div className="flex items-center gap-4 mb-4">
                 <Shield className="w-10 h-10 text-mbs-yellow shrink-0" />
                 <h3 className="text-2xl font-bold uppercase tracking-tight">MAS Licensing</h3>
               </div>
               <p className="text-base leading-relaxed text-blue-50">
                 MBS is registered under the Monetary Authority of Singapore (MAS) as a <strong>Licensed Financial Advisor</strong> and <strong>Exempt Insurance Broker</strong>. This accreditation reflects our commitment to professional excellence and regulatory compliance in Singapore's financial sector.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership / Meet the Team */}
      <section className="py-24 bg-mbs-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-mbs-blue uppercase italic tracking-tight">Meet the Team</h2>
            <div className="h-1 w-24 bg-mbs-yellow mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8"
              >
                <div className="w-44 h-56 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-40 lg:h-52 xl:w-44 xl:h-56 shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center relative shadow-sm">
                  <img 
                    src={getMemberPhoto(member.name)} 
                    alt={member.name} 
                    className="max-w-full max-h-full object-contain transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-mbs-blue/5 pointer-events-none"></div>
                </div>
                <div className="flex-grow flex flex-col justify-center text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-mbs-blue font-bold text-sm mb-4 uppercase tracking-widest">{member.appointment}</p>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{member.description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
