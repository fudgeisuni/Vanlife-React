import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail';
import Host from './Host'
import HostLayout from './HostLayout'
import Income from './Income'
import Reviews from './Reviews'
import HostVans from './HostVans'
import HostVanDetail from './HostVanDetail'
// Import fake API server
import "./server.js";
import Layout from '../components/Layout';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <Router element={<Layout />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  element={<Home />}/>
            <Route path="about"  element={<About />}/>
            <Route path="vans">
               <Route index element={<Vans />} />
               <Route path=":id" element={<VanDetail/>}/>
            </Route>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Host />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews />}/>
              <Route path="vans">
                <Route index element={<HostVans />}></Route>
                <Route path=":id" element={<HostVanDetail/>}/>
              </Route>
           </Route>
          </Route>
        </Routes>
      </Router>
  </StrictMode>
);
