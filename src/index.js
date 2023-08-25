import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail';
// Import fake API server
import "./server.js";
import Layout from '../components/Layout'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>

      <Router element={<Layout />}>
        <nav>
          <table>
            <tr>
            <td class="nav">
            <Link class="navText" to="/">#VANLIFE</Link>
            </td>
            <td class="navLink">
            <Link class="splashText" to="/about">About</Link>
            </td>
            <td class="navLink">
            <Link class="splashText" to = "/vans">Vans</Link>
            </td>
            </tr>
          </table>
        </nav>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/about"  element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail/>}/>
        </Routes>
      </Router>
  </StrictMode>
);
