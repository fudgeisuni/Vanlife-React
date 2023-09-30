import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, useSearchParams, useLoaderData, useParams} from "react-router-dom"
import {getHostVans} from "./Api.js"

export function loader(){
  return getHostVans()
}

export default function HostVans(){

  // const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type");
  
  const vans = useLoaderData();

  // React.useEffect(function() {
  //   fetch("/api/host/vans")
  //       .then(res => res.json())
  //       .then(data => setVans(data.vans))
  // }, [])
  
  const vanElements = vans.map(van => (
    <div key={van.id} className="van-tile-host">
      <Link  class="navText" to={van.id}>
      <img class="van-image-host" src={van.imageUrl} />
      </Link>
      <div className="van-info-host">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>  
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ))

  return(
    <>
    <div class="hostVans">
         <h1>Your listed vans</h1> 
         <div className="host-vans-list">
                  {
                      vans.length > 0 ? (
                        <section>
                         {vanElements}     
                        </section>  
                      ) : (
                          <h2>Loading</h2>
                      )
                   }
            </div>
    </div>
    </>
  )
}