/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function TermsConditions() {
  return (
    <div className="bg-white min-h-screen py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-black text-slate-900 border-b-4 border-mbs-yellow pb-4 mb-12 uppercase italic"
        >
          Terms & Conditions
        </motion.h1>

        <div className="space-y-12 text-slate-700 leading-relaxed">
          {[
            { title: 'Legal Notices', content: 'This web site is provided by Metropolitan Broking Services Pte Ltd (MBS) and may be used for informational purposes only. By using this web site and downloading information and or materials from the web site, you have agreed to abide by the terms and conditions set forth in this notice.' },
            { title: 'Disclaimer', content: 'All effort and care has been taken to ensure that all information and or materials provided is up to date and accurate. MBS will not, in any event, be held responsible or liable for any loss or damage of any kind whatsoever arising as a result of any inaccuracies or omissions in respect of the use of this information.' },
          ].map((sec, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
            >
              <h2 className="text-2xl font-bold text-mbs-blue mb-4">{sec.title}</h2>
              <p>{sec.content}</p>
            </motion.section>
          ))}

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-mbs-blue mb-4">License Limitation</h2>
            <p className="mb-4">
              MBS authorises you to view and download whatever information and or materials at this web site only for your personal and or non-commercial use. All information and or materials found in this web site belongs to MBS, except for 3rd Party web sites linked to MBS.
            </p>
            <p className="mb-4 font-bold">
              All information and or materials are subjected to the following restrictions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must not modify any information and or materials in any way or reproduce or publicly display, perform, or distribute or otherwise use them for any public or commercial purposes;</li>
              <li>You must not transfer any information and or materials to any other person; unless a written request has been sought from and a written approval given by MBS.</li>
            </ul>
            <p className="mt-4">
              You agree to abide by all additional restrictions displayed on the web site as it may be updated from time to time.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-mbs-blue mb-4">Third Party Sites</h2>
            <p>
              For your convenience and surfing pleasure, MBS may from time to time provide links to third party web sites operated by other entities. If you decide to visit any of the linked web sites, you are doing so at your own risk. MBS will not be held responsible for the content, security or privacy practices employed by other web sites MBS makes no warranty or representation regarding, and does not endorse, any linked third party web sites or the information and or materials appearing thereon or any of the products or services offered.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-mbs-blue mb-4">Amendments</h2>
            <p>
              MBS reserves the right, at its sole discretion, to change, modify, add or remove any portion of this agreement and or web site in whole or in part, at any time without prior notification.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
