import React from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"
import "./style.css";

export default function HostVanInfo(){
    const [van, setVan] = useOutletContext();
    return(
      <div class="vanInfoDiv">
        <p>{van.name}</p>
        <p>{van.type}</p>
        <p><p class="headerPara">Description:</p>{van.description}</p> 
      </div>
    )
}