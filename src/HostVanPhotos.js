import React from "react"
import { useParams, Link, useOutletContext} from "react-router-dom"
import "./style.css";

export default function HostVanPhotos(){
  const [van] = useOutletContext();
    return(
      <img class="navVanImage" src={van.imageUrl}/>
    )
}