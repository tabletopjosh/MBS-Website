/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function ReachUs() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-mbs-blue text-white py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl font-black uppercase italic tracking-wider">Reach Us</h1>
          <p className="mt-4 text-blue-100 font-light text-lg">We are here to assist you with your insurance and financial needs.</p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Column: Location & Hours */}
            <div className="flex flex-col justify-between gap-8">
              {/* Location Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-slate-900 text-white flex gap-6 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <MapPin className="w-32 h-32" />
                </div>
                <MapPin className="w-8 h-8 text-mbs-yellow shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-white uppercase italic tracking-wide mb-3">Our Location</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    865 Mountbatten Road<br />
                    #06-24 Katong Shopping Centre<br />
                    (6th floor, Office 24)<br />
                    Singapore 437844
                  </p>
                </div>
              </motion.div>

              {/* Operating Hours Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white border-2 border-mbs-grey shadow-sm flex-grow flex flex-col justify-center"
              >
                <h3 className="text-2xl font-black flex items-center gap-3 text-mbs-blue uppercase italic tracking-wide mb-6">
                  <Clock className="w-6 h-6 text-mbs-yellow" /> Operating Hours
                </h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-700">Monday - Friday</span>
                    <span className="font-bold text-slate-900">09:00 am - 5:30 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-700">Saturday</span>
                    <span className="font-bold text-slate-900">09:00 am - 1:00 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-700">Sunday & Public Holidays</span>
                    <span className="font-bold text-red-600">CLOSED</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed italic bg-slate-50 p-4 rounded-xl">
                    Note: If a Public Holiday falls on either Friday or Monday, our office will then be closed on the Saturday in between.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-full min-h-[400px] lg:min-h-[500px] bg-mbs-grey relative group"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790515152349!2d103.899738011283!3d1.300539161726527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1871a6e9bb21%3A0xe54cf1762c2f7c0!2sKatong%20Shopping%20Centre!5e0!3m2!1sen!2ssg!4v1715494800000!5m2!1sen!2ssg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
                 <a 
                  href="https://maps.google.com/?q=865+Mountbatten+Road+Katong+Shopping+Centre+Singapore+437844" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-lg text-mbs-blue block"
                 >
                   <ExternalLink className="w-5 h-5" />
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
