import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail(){
    const params = useParams()
    console.log(params)

    const [van, setVan] = React.useState([]);

    React.useEffect(function() {
      fetch("/api/vans/" + params.id.toString())
          .then(res => res.json())
          .then(data => setVan(data.vans))
    }, [])


    

    return(
     <div key={van.id} className="van-tile">
        <img class="van-image" src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>  
        </div>
        
      </div>
    )
}