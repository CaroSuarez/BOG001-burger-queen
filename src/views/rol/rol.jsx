import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import glass from "../../assets/glass.png";
import knife from "../../assets/knife-02.png";
import "./rol.scss";

function Rol() {
  return (
    <div>
      <div className="waiter-out">
        <Link to="/waiterOrder">
          <Button label="WAITER" />
        </Link>
        <div className="waiter-inner">
          <img src={glass} alt="waiter" />
        </div>
      </div>
      <div>
        <div className="chef-out">
          <Link to="/chefOrder">
            <Button label="CHEF" />
          </Link>
        </div>
        <div className="chef-inner">
          <img src={knife} alt="chef" />
        </div>
      </div>
    </div>
  );
}

export default Rol;
