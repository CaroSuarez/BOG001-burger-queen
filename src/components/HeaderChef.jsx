import React from "react";
import logo from "../assets/hamburguer.png";
import { Link } from "react-router-dom";
import "./header.scss";

function HeaderChef (props) {
  return (
    <div className="header-nav">
      <div className="header-item">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="header-text">
        <h2 className="title">BQUEEN</h2>
        <p className="rol-text">
          {props.rol}
          {props.number}
        </p>
      </div>
      
        
     
      <div>
        <nav>
          <input className="menu-checkbox" type="checkbox" id="menu" />
          <label className="menu" htmlFor="menu">
            &#x2630;
          </label>
          <ul className="ul-menu">
            <Link to="/rol">
              <li className="li-menu">Rol</li>
            </Link>
            <Link to="/">
              <li className="li-menu">Exit</li>
            </Link>
          </ul>
        </nav>
      </div>
      <hr />
      <hr />
    </div>
  );
}
export default HeaderChef;
