import React from "react";
import "./styles.css";

function MyNavbar () {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1 id="navBar">Maximillian Cartwright</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link nav1" href="index.html">About <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav2" href="portfolio.html">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default MyNavbar

