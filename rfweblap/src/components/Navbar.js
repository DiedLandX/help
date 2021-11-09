import React, { useState } from "react";
import Logo from "../assets/Pizza-logo.png";
import { Link } from "react-router-dom";
import "..//styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import ordersIcon from "../assets/ordersIcon.png";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Főoldal</Link>
          <Link to="/pizza"> Pizzák</Link>
          <Link to="/rolunk"> Rólunk</Link>
          <Link to="/kapcsolat"> Kapcsolat</Link>
          <Link to="/bejelentkezes"> Bejelentkezés/Regisztráció</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Főoldal</Link>
        <Link to="/pizza"> Pizzák</Link>
        <Link to="/rolunk"> Rólunk</Link>
        <Link to="/kapcsolat"> Kapcsolat</Link>
        <Link to="/bejelentkezes"> Bejelentkezés/Regisztráció</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <img id="Kosár" alt="Kosár" src={ordersIcon}></img>
    </div>
  );
}

export default Navbar;
