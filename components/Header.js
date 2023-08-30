import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"

export default function Header() {

  const activeStyle = {
    fontWeight: "600",
    color: "yellow"
  }



  return (
    <nav>
    <table>
      <tr>
      <td class="nav">
      <Link class="navText" to="/">#VANLIFE</Link>
      </td>
      <td class="navLink">
      <NavLink 
      class="splashText" 
      to="/about"
      style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
      </td>
      <td class="navLink">
      <NavLink 
      class="splashText" 
      to = "/host"
      style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
      </td>
      <td class="navLink">
      <NavLink class="splashText" 
      to = "/vans"
      style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
      </td>
      </tr>
    </table>
  </nav>
  )
}