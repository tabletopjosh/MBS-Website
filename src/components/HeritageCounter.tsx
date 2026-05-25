/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function HeritageCounter() {
  const digits = ['1', '9', '7', '8'];

  return (
    <div className="bg-mbs-blue p-8 md:max-lg:px-3 md:max-lg:py-6 lg:p-12 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center space-y-6 overflow-hidden relative border-4 border-mbs-blue/20">
      {/* Decorative background stripes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-xl md:max-lg:text-xl lg:text-3xl font-black uppercase tracking-tight"
      >
        Faithfully serving since
      </motion.p>

      <div className="flex gap-2 md:max-lg:gap-1.5 lg:gap-4 justify-center items-center">
        {digits.map((digit, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 }}
            className="w-16 h-24 md:max-lg:w-[52px] md:max-lg:h-[80px] lg:w-24 lg:h-36 bg-white rounded-lg shadow-inner flex items-center justify-center relative border-b-4 border-slate-300"
          >
            {/* Split line decoration */}
            <div className="absolute w-full h-[2px] bg-slate-100 top-1/2 left-0 -translate-y-1/2 z-0"></div>
            
            <span className="text-4xl md:max-lg:text-[36px] lg:text-7xl font-sans font-black text-mbs-blue relative z-10 tracking-tight">
              {digit}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-1"
      >
        <p className="text-mbs-yellow text-2xl md:max-lg:text-2xl lg:text-4xl font-black uppercase tracking-tighter drop-shadow-md">
          45+ years of great service
        </p>
        <div className="h-1 bg-mbs-yellow w-full rounded-full"></div>
      </motion.div>
    </div>
  );
}
