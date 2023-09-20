import React from "react"
import { useParams, Link, useOutletContext} from "react-router-dom"
import "./style.css";

export default function HostVanPricing(){
  const [van] = useOutletContext();
    return(
      <p>${van.price}.00 / Day</p>
    )
}