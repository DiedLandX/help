import React from "react";
import "../styles/Pizzak.css";
import kep from "../assets/margherita.jpg";
import { Button } from "@mui/material";
function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <img className="pizzaImg" width="300" height="200" src={kep} />
      <h1>{name}</h1>
      <div className="pizzaDetails">
        <p>{price}-Ft</p>
        <Button color="inherit">Kosárba</Button>
      </div>
    </div>
  );
}

export default MenuItem;
