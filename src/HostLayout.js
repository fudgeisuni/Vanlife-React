import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"

export default function HostLayout(){
  return(
    <>
    <nav>
    <table>
      <tr>
      <td class="navLink">
      <Link class="splashText" to="/host">Dashboard</Link>
      </td>
      <td class="navLink">
      <Link class="splashText" to = "/host/income">Income</Link>
      </td>
      <td class="navLink">
      <Link class="splashText" to = "/host/reviews">Reviews</Link>
      </td>
      </tr>
    </table>
    </nav>
    <Outlet />
    </>
    
  )
}