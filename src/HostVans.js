import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export default function HostVans(){

  const [vans, setVans] = React.useState([]);

  React.useEffect(function() {
    fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])
  
  const vanElements = vans.map(van => (
    <div key={van.id} className="van-tile-host">
      <Link  class="navText" to={`/vans/${van.id}`}>
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
         <div class="hostVansList">
          {vanElements}
         </div>
    </div>
    </>
  )
}