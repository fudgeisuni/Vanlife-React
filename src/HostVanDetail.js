import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import "./style.css";

export default function HostVanDetail(){
    const params = useParams()
    console.log(params)

    const [van, setVan] = React.useState([]);

    React.useEffect(function() {
      fetch("/api/vans/" + params.id.toString())
          .then(res => res.json())
          .then(data => setVan(data.vans))
    }, [params.id])

    const activeStyles = {
      fontWeight: "600",
      textDecoration: "underline",

    }
  

    return(
     <div>
     {van ? (   
      <section>
        <Link to=".." className="back-button">
          &larr;<span>Back to all vans</span>
        </Link>
        <div key={van.id} className="van-tile-host-detail">
            <div class="van-tile-host-side">
            <img class="van-image-host-detail" src={van.imageUrl} />
            <div className="van-info-host-detail">
              <button class="host-van-type">{van.type}</button>
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p> 
            </div>
            </div>

            <nav className="host-van-detail-nav">
              <NavLink
               className="navLink"
               to="."
               end
               style={({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
              <NavLink 
              className="navLink"
              to="pricing"
              style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
              <NavLink 
              className="navLink"
              to="photos"
              style={({isActive}) => isActive ? activeStyles : null}>
                Photos</NavLink>
            </nav>

            <Outlet context={[van, setVan]}/>
          </div>
      </section>
      ) : <h2>Loading</h2>}
      </div>
    )
}