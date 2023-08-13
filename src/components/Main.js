import React from 'react'
import PropTypes from 'prop-types'
export default function Main(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b> {props.title} </b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
    </div>
   { props.searchbar? <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>: ""}
  </div>
</nav>
    </>
  )
}
Main.propTypes = {
  title: PropTypes.string
}

