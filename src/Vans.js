import React from "react";
import "./style.css";
import "./server.js";
import {getVans} from "./Api.js"
import { BrowserRouter as Router, Routes, Route, Link, searchParams, useSearchParams} from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const filteredArray = typeFilter?  vans.filter(van => van.type == typeFilter.toString()) : vans;

  console.log(typeFilter)
  console.log(filteredArray)
  console.log(searchParams.toString())

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try{
        const data = await getVans()
        setVans(data)
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  if(loading) {
    return <h1>Loading</h1>
  }
  
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