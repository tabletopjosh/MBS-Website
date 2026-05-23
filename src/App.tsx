/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductsServices from './pages/ProductsServices';
import ReachUs from './pages/ReachUs';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="products" element={<ProductsServices />} />
          <Route path="contact" element={<ReachUs />} />
          <Route path="terms" element={<TermsConditions />} />
        </Route>
      </Routes>
    </Router>
  );
}
