import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export default function Header() {
  return (
    <nav>
    <table>
      <tr>
      <td class="nav">
      <Link class="navText" to="/">#VANLIFE</Link>
      </td>
      <td class="navLink">
      <Link class="splashText" to="/about">About</Link>
      </td>
      <td class="navLink">
      <Link class="splashText" to = "/host">Host</Link>
      </td>
      <td class="navLink">
      <Link class="splashText" to = "/vans">Vans</Link>
      </td>
      </tr>
    </table>
  </nav>
  )
}