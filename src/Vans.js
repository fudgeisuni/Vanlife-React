import React from "react";
import "./style.css";
import "./server.js";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(function() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])
  
  const vanElements = vans.map(van => (
    <div key={van.id} className="van-tile">
      <Link  class="navText" to={`/vans/${van.id}`}>
      <img class="van-image" src={van.imageUrl} />
      </Link>
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>  
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ))

  
  return (
    <>
    <div class="over-tile">
    { vanElements}
    </div>
    </>
  )
}