import React from "react"
import { useParams, Link, useLocation, useLoaderData} from "react-router-dom"
import "./style.css";
import {getVans} from "./Api.js"

export function loader({params}){
  return getVans(params.id)
}

export default function VanDetail(){
    const location = useLocation()

    const vans = useLoaderData();
    const params = useParams();
    const id = params.id;
    const van = vans[id];

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return(
     <div>
     {van ? (   
     <div key={van.id} className="van-tile">
        <Link to={location.state.searchParams ?'/vans/?' + location.state.searchParams.toString() : '/vans'} className="back-button">
          &larr;<span>{search ? 'Back to ' + type.toString() + ' vans'
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