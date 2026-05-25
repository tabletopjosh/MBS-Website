/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mbs-grey text-slate-800 pt-12 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-mbs-blue flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Location
            </h3>
            <p className="text-sm leading-relaxed">
              865 Mountbatten Road<br />
              #06-24 Katong Shopping Centre<br />
              Singapore 437844
            </p>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-mbs-blue flex items-center gap-2">
              <Clock className="w-5 h-5" /> Operating Hours
            </h3>
            <div className="text-sm space-y-1">
              <p>Mon - Fri: 09:00 am - 5:30 pm</p>
              <p>Sat: 09:00 am - 1:00 pm</p>
              <p className="text-red-600 font-medium">Sun & Public Holidays: CLOSED</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Metropolitan Broking Services Pte Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs">
            <Link to="/terms" className="hover:text-mbs-blue font-medium underline transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
