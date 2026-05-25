/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import mbsLogo from './MBS_LOGO.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Reach Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-mbs-grey font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img 
              src={mbsLogo} 
              alt="MBS Logo" 
              className="h-16 w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
          </NavLink>
          
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `text-sm transition-all hover:text-mbs-blue px-3 py-2 rounded-md border ${
                    isActive 
                      ? 'text-mbs-blue font-bold border-mbs-blue bg-mbs-blue/5 shadow-sm' 
                      : 'text-slate-600 font-medium border-transparent'
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 focus:outline-none p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6 text-mbs-blue" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-mbs-grey overflow-hidden shadow-inner"
          >
            <div className="px-4 py-3 space-y-2">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base transition-all px-4 py-3 rounded-xl border ${
                      isActive 
                        ? 'text-mbs-blue font-bold border-mbs-blue bg-mbs-blue/5 shadow-sm' 
                        : 'text-slate-600 font-medium border-transparent active:bg-slate-50'
                    }`
                  }
                >
                  {tab.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
