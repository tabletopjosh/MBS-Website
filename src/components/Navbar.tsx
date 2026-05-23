/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import mbsLogo from './MBS_LOGO.png';

export default function Navbar() {
  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-mbs-grey font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center">
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
          
          {/* Mobile menu button (simple) */}
          <div className="md:hidden">
            <button className="text-slate-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
