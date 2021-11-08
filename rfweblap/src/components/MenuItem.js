import React from 'react'
import '../styles/Pizzak.css'
import kep from "../assets/margherita.jpg";
function MenuItem({image,name,price}) {
    return (
        <div className="menuItem">
            <img className="pizzaImg" width = "300" height = "200" src={kep}/>
            <h1>{name}</h1> 
            <p>{price}-Ft</p>
        </div>
    )
}

export default MenuItem
