import React from "react";
import "./style.css";

export default function Vans() {
  const [resp, setResp] = React.useState([]);

  React.useEffect(function() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setResp(data.results[0]))
  }, [])

  return (
    <h1>Vans Page Goes Here 🚚</h1>
  )
}