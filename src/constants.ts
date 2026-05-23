/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, ServiceItem } from './types';

export const COLORS = {
  blue: '#1155cc',
  yellow: '#f1c232',
  white: '#ffffff',
  grey: '#efefef',
};

export const TEAM: TeamMember[] = [
  {
    name: 'Lionel Ong',
    appointment: 'CEO & Managing Director',
    description: 'Lionel Ong, the founder of MBS is a Chartered Insurance Practitioner and a Licensed Senior Financial Advisor Representative. He is the firm foundation that MBS rests upon. With his vast experience of more than 30 years and knowledge in the financial sector, he is our company\'s compass, giving MBS its clear direction for the past 25 years.',
    image: '/LIONEL.png',
  },
  {
    name: 'Betty Ong',
    appointment: 'Director, Head Accounts, Claims, Systems & Training Departments',
    description: 'Betty Ong, the co-founder of MBS is a Licensed Senior Financial Adviser Representative. She plays a vital role in the company\'s operations especially in areas of administration, financial control and claims. Her dedication and passion for her job has been instrumental and inspiring for the rest of the team. Her energy is no where like a lady of her age.',
    image: '/BETTY.png',
  },
];

export const SERVICES: ServiceItem[] = [
  // Insurance Products
  { name: 'Personal Insurance', category: 'Insurance' },
  { name: 'Critical Illness', category: 'Insurance' },
  { name: 'Endowment', category: 'Insurance' },
  { name: 'Hospital & Surgical', category: 'Insurance' },
  { name: 'Investment Linked Products', category: 'Insurance' },
  { name: 'Mortgage Decreasing', category: 'Insurance' },
  { name: 'Motor', category: 'Insurance' },
  { name: 'Personal Accident', category: 'Insurance' },
  { name: 'Single Premium Products', category: 'Insurance' },
  { name: 'Term', category: 'Insurance' },
  { name: 'Travel', category: 'Insurance' },
  { name: 'Whole Life', category: 'Insurance' },
  
  { name: 'Group Insurance', category: 'Insurance', subCategory: 'Group' },
  { name: 'Group Hospital & Surgical Scheme', category: 'Insurance', subCategory: 'Group' },
  { name: 'Group Living Assurance', category: 'Insurance', subCategory: 'Group' },
  { name: 'Group Long Term Disability Insurance', category: 'Insurance', subCategory: 'Group' },
  { name: 'Group Personal Accident', category: 'Insurance', subCategory: 'Group' },
  { name: 'Group Term Life', category: 'Insurance', subCategory: 'Group' },
  { name: 'Group Travel', category: 'Insurance', subCategory: 'Group' },
  
  { name: 'Property', category: 'Insurance', subCategory: 'Property' },
  { name: 'Burglary', category: 'Insurance', subCategory: 'Property' },
  { name: 'Cash-in-transit', category: 'Insurance', subCategory: 'Property' },
  { name: 'Consequential Loss', category: 'Insurance', subCategory: 'Property' },
  { name: 'Equipment All Risks', category: 'Insurance', subCategory: 'Property' },
  { name: 'Fire', category: 'Insurance', subCategory: 'Property' },
  { name: 'Householder', category: 'Insurance', subCategory: 'Property' },
  { name: 'Houseowner', category: 'Insurance', subCategory: 'Property' },
  
  { name: 'Liabilities', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Bonds (Selective)', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Directors\' Liability', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Errors & Omission', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Maid Insurance', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Professional Indemnity', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Public Liability', category: 'Insurance', subCategory: 'Liabilities' },
  { name: 'Workmen\'s Compensation', category: 'Insurance', subCategory: 'Liabilities' },
  
  { name: 'Marine', category: 'Insurance', subCategory: 'Marine' },
  { name: 'Cargo & Hull', category: 'Insurance', subCategory: 'Marine' },

  // Financial Products
  { name: 'Comprehensive Financial Planning', category: 'Financial' },
  { name: 'Investment Planning', category: 'Financial' },
  { name: 'Risk Management and Insurance Planning', category: 'Financial' },
  { name: 'Tax and Estate Planning', category: 'Financial' },

  // Tailor Made
  { name: 'Senior Citizens', category: 'Tailor Made' },
  { name: 'Hospital & Surgical Insurance Scheme', category: 'Tailor Made' },
  { name: 'Non Profit Organisation Scheme(NPOS)', category: 'Tailor Made' },
  { name: 'Group Hospital & Surgical Scheme', category: 'Tailor Made' },
  { name: 'Group Living', category: 'Tailor Made' },
  { name: 'Group Long Term Disability', category: 'Tailor Made' },
  { name: 'Group Personal Accident', category: 'Tailor Made' },
  { name: 'Group Term Life', category: 'Tailor Made' },
  { name: 'Non-Profit Organisation Package Policy (NPP)', category: 'Tailor Made' },
  { name: 'All Risk on Contents', category: 'Tailor Made' },
  { name: 'Fire & Extraneous Perils', category: 'Tailor Made' },
  { name: 'Money Insurance', category: 'Tailor Made' },
  { name: 'Personal Accident', category: 'Tailor Made' },
  { name: 'Public Liability', category: 'Tailor Made' },
  { name: 'Work Injury Compensation', category: 'Tailor Made' },
  { name: 'Children\'s Group Personal Accident', category: 'Tailor Made' },
  { name: 'Special Welfare Insurance Scheme For Staff (SWISS)', category: 'Tailor Made' },
];
