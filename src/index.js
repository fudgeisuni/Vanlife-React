import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route, redirect} from "react-router-dom"
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
import Error from '../components/Error';
import VanDetail, {loader as vanDetailLoader} from './VanDetail.js'
import HostVans, {loader as hostVansLoader} from './HostVans.js'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<Layout />}>
    <Route index  element={<Home />}/>
    <Route path="about"  element={<About />}/>
    <Route path="vans" errorElement={<Error />}>
      <Route index loader={vanPageLoader} element={<Vans />} />
      <Route path=":id"  element={<VanDetail/>} loader={vanDetailLoader}/>
    </Route>
    <Route path="host" element={<HostLayout />} loader={
      async() => {
        return null
      }
    }>
      <Route index element={<Host />} loader={
      async() => {
        return null
      }
    }/>
      <Route path="income" element={<Income />} loader={
      async() => {
        return null
      }
    }/>
      <Route path="reviews" element={<Reviews />} loader={
      async() => {
        return null
      }
    }/>
      <Route path="vans">
        <Route index element={<HostVans />} loader={hostVansLoader}></Route>
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
