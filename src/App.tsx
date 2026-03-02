/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { RibbonBackground } from "./components/RibbonBackground";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <RibbonBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}
