import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>

    <nav className="navbar navbar-expand-lg ">
    <div className="container">
    <Link className="navbar-brand text-white fs-1 w-bolder my-3" to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">

        <li className="nav-item">
          <NavLink className="nav-link text-white w-bold my-3"   aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-3 text-white w-bold my-3" to="protfolio">PROTFOLIO</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link text-white w-bold my-3" to="contact">CONTACT</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>



    </>
  }
}
