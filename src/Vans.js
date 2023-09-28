import React from "react";
import "./style.css";
import "./server.js";
import {getVans} from "./Api.js"
import { BrowserRouter as Router, Routes, Route, Link, searchParams, useSearchParams, useLoaderData} from "react-router-dom"

export function loader() {
  return getVans();
}


export default function Vans() {
  const loaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const filteredArray = typeFilter?  loaderData.filter(van => van.type == typeFilter.toString()) : loaderData;

  console.log(typeFilter)
  console.log(filteredArray)
  console.log(searchParams.toString())
  console.log(loaderData);
  


  const vanElements = filteredArray.map(van => (
    <div key={van.id} className="van-tile">
      <Link  class="navText" to={van.id} state={{searchParams : searchParams.toString(), typeFilter : typeFilter}}>
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
      <button className="filterButton" 
      onClick={() => setSearchParams({type: "simple"})}>Simple</button>
         <button className="filterButton" 
      onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
         <button className="filterButton" 
      onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
      {typeFilter != null &&
      <Link className="filterButton" to="?">Clear</Link>
       }
      </div>
    </div>
    <div class="over-tile">
      {vanElements}
    </div>
    </>
  )
}