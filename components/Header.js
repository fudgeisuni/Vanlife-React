import React from "react"

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
      <Link class="splashText" to = "/vans">Vans</Link>
      </td>
      </tr>
    </table>
  </nav>
  )
}