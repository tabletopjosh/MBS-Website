/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  name: string;
  appointment: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  name: string;
  category: 'Insurance' | 'Financial' | 'Tailor Made';
  subCategory?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}
