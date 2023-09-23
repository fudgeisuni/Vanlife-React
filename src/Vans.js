import React from "react";
import "./style.css";
import "./server.js";
import { BrowserRouter as Router, Routes, Route, Link, searchParams, useSearchParams} from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const filteredArray = typeFilter?  vans.filter(van => van.type == typeFilter.toString()) : vans;

  console.log(typeFilter)
  console.log(filteredArray)

  React.useEffect(function() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])
  
  const vanElements = filteredArray.map(van => (
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
    <div className="vist-list-filter-buttons">
      <div>
      <Link className="filterButton" to="?type=simple">Simple</Link>
      <Link className="filterButton" to="?type=luxury">Luxury</Link>
      <Link className="filterButton" to="?type=rugged">Rugged</Link>
      <Link className="filterButton" to="?">Clear</Link>
      </div>
    </div>
    <div class="over-tile">
      {vanElements}
    </div>
    </>
  )
}