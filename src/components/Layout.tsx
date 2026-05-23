/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
