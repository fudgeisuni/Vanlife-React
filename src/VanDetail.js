import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import "./style.css";
import {getVans} from "./Api.js"

export function loader({params}){
  console.log(params)
  return getVans()
}

export default function VanDetail(){
    const params = useParams()
    console.log(params)

    const [van, setVan] = React.useState([]);
    const location = useLocation()
    console.log(location)

    const typeFilter = location.state.typeFilter;

    React.useEffect(function() {
      fetch("/api/vans/" + params.id.toString())
          .then(res => res.json())
          .then(data => setVan(data.vans))
    }, [params.id])

    return(
     <div>
     {van ? (   
     <div key={van.id} className="van-tile">
        <Link to={location.state.searchParams ?'/vans/?' + location.state.searchParams.toString() : '/vans'} className="back-button">
          &larr;<span>{location.state.typeFilter ? 'Back to ' + typeFilter.toString() + ' vans'
          : 'Back to all vans' }</span>
        </Link>
        <img class="van-image" src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>  
        </div>
      </div>
      ) : <h2>Loading</h2>}
      </div>
    )
}