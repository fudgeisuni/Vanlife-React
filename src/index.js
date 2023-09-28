import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Vans, { loader as vanPageLoader } from './Vans';
import VanDetail from './VanDetail';
import Host from './Host'
import HostLayout from './HostLayout'
import Income from './Income'
import Reviews from './Reviews'
import HostVans from './HostVans'
import HostVanDetail from './HostVanDetail'
import HostVanInfo from './HostVanInfo'
import HostVanPhotos from './HostVanPhotos'
import HostVanPricing from './HostVanPricing'
// Import fake API server
import "./server.js";
import Layout from '../components/Layout';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<Layout />} errorElement={<h1>There was an error!</h1>}>
    <Route index  element={<Home />}/>
    <Route path="about"  element={<About />}/>
    <Route path="vans">
      <Route index loader={vanPageLoader} element={<Vans />} />
      <Route path=":id" element={<VanDetail/>}/>
    </Route>
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Host />}/>
      <Route path="income" element={<Income />}/>
      <Route path="reviews" element={<Reviews />}/>
      <Route path="vans">
        <Route index element={<HostVans />}></Route>
        <Route path=":id" element={<HostVanDetail/>}>
          <Route index element={<HostVanInfo />}></Route> 
          <Route path="photos" element={<HostVanPhotos />}></Route> 
          <Route path="pricing" element={<HostVanPricing />}></Route> 
        </Route>
      </Route>
      <Route path="*"  element={<h1>Page not found!</h1>}/>
    </Route>
  </Route>
))

root.render(
  <RouterProvider router={router} />
);
