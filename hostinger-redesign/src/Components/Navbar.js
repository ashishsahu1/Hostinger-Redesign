import React, { useState } from "react";
import "./Navbar.css";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";
import { cartOutline } from "ionicons/icons";
import { lockClosedOutline } from "ionicons/icons";
import logo from '../assets/logo.png'

function Navbar() {
  const [clsnm, setClsnm] = useState("headerr");
  const toggleNavbar = () => {
    if (clsnm == "headerr") {
      setClsnm("headerr active");
    } else {
      setClsnm("headerr");
    }
  };

  return (
    <div className={clsnm}>
      {/* <h1 className="logo">Hostinger</h1> */}
      <img className="logo" src={logo} alt="logo" srcset="" />
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="navbar-link" href="https://www.google.co.in/">
              Hosting
            </a>
            
          </li>
          <li>
            <a className="navbar-link" href="https://www.google.co.in/">
              VPS
            </a>
          </li>
          <li>
            <a className="navbar-link" href="https://www.google.co.in/">
              Email
            </a>
          </li>
          <li>
            <a className="navbar-link" href="https://www.google.co.in/">
              Domain
            </a>
          </li>
        </ul>
      </nav>
      <div className="btns flex">
        <a href="" className="log-button flex">
          <IonIcon icon={lockClosedOutline} className="cart-icon"></IonIcon>
          <p>Log in</p>
        </a>
        <a href="" className="crt-button flex">
          <IonIcon icon={cartOutline} className="cart-icon"></IonIcon>
          <p>Cart</p>
        </a>

        <div onClick={toggleNavbar} className="mobile-navbar-btn">
          <IonIcon
            icon={menuOutline}
            className="mobile-nav-icon menu"
          ></IonIcon>
          <IonIcon
            icon={closeOutline}
            className="mobile-nav-icon close"
          ></IonIcon>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
