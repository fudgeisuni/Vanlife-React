import React from "react"
import { useParams, Link, useOutletContext } from "react-router-dom"
import "./style.css";

export default function HostVanInfo(){
    const [van] = useOutletContext();
    return(
      <div class="vanInfoDiv">
        <p><p class="headerPara">Name:</p>{van.name}</p>
        <p><p class="headerPara">Description:</p>{van.description}</p> 
      </div>
    )
}