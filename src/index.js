import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail';
import Host from './Host'
import Income from './Income'
import Reviews from './Reviews'
// Import fake API server
import "./server.js";
import Layout from '../components/Layout';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <Router element={<Layout />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"  element={<Home />}/>
            <Route path="/about"  element={<About />}/>
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetail/>}/>
            <Route path="/host" element={<Host />}/>
            <Route path="/income" element={<Income />}/>
            <Route path="/reviews" element={<Reviews />}/>
          </Route>
        </Routes>
      </Router>
  </StrictMode>
);
