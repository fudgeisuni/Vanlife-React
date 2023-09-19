import React from "react"
import { useParams, Link, Outlet } from "react-router-dom"
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

    return(
     <div>
     {van ? (   
      <section>
        <Link to=".." className="back-button">
          &larr;<span>Back to all vans</span>
        </Link>
        <div key={van.id} className="van-tile-host-detail">
            <img class="van-image-host-detail" src={van.imageUrl} />
            <div className="van-info-host-detail">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p> 
            </div>
            <Outlet />
          </div>
      </section>
      ) : <h2>Loading</h2>}
      </div>
    )
}