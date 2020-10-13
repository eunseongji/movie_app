import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu-box">
      <ul className="menu">
        <li className="menu-item">
          <a className="menu-link" href="/#">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="/#">
            About
          </a>
        </li>
        <li className="menu-item">
          <a href="/#" className="menu-link">
            Reservation
          </a>
        </li>
        <li class="menu-item">
          <a href="/#" class="menu-link">
            Mypage
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
