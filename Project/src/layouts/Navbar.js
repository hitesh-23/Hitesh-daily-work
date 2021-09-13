import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white text-uppercase ml-5" to="home"><img src={logo} alt="logo" style={{width : '35px'}}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link active text-white text-uppercase ml-5" aria-current="page" to="home">Home &nbsp; <i class="fa-solid fa-house ml-5"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="news">news</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="contact-us">Contact us</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary text-white text-uppercase" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
