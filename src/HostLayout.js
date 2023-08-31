import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"
import {Outlet} from "react-router-dom"

export default function HostLayout(){
  
  const activeStyle = {
    fontWeight: "600",
    textDecoration: "underline",
    color: "#DDD313"
  }


  return(
    <>
    <nav>
    <table>
      <tr>
      <td class="navLink">
      <NavLink class="splashText" to="/host"
      end
      style={({isActive}) => isActive ? activeStyle : null}>Dashboard</NavLink>
      </td>
      <td class="navLink">
      <NavLink class="splashText" to = "/host/income"
      style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
      </td>
      <td class="navLink">
      <NavLink class="splashText" to = "/host/vans" 
      style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
      </td>
      <td class="navLink">
      <NavLink class="splashText" to = "/host/reviews" 
      style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
      </td>
      </tr>
    </table>
    </nav>
    <Outlet />
    </>
  )
}