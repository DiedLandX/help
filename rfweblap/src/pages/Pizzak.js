import MenuItem from "../components/MenuItem";
import React from "react";
import { MenuList } from "../other/MenuList";
import "../styles/Pizzak.css";
function Pizzak() {
  return (
    <div className="menu">
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              className="menuItem"
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pizzak;
