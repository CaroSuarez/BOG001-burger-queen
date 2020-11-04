import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import bqueen from "../../assets/bqueen-home.svg";
import "./home.scss";

function Home() {
  return (
    <div className="home-container">
      <img className="home-img" src={bqueen} alt="home" />
      <h1>BURGUER QUEEN</h1>
      <Link to="/rol">
        <div className="btn-init">
          <Button label="START" />
        </div>
      </Link>
    </div>
  );
}

export default Home;
