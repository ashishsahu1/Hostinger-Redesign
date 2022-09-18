import React, { useState } from "react";
import "./Navbar.css";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";
import { cartOutline } from "ionicons/icons";
import { lockClosedOutline } from "ionicons/icons";
import logo from '../assets/logo.png'
import { logoWordpress } from "ionicons/icons";
import { serverOutline } from "ionicons/icons";
import { cloudOutline } from "ionicons/icons";
import { browsersOutline } from "ionicons/icons";
import { globeOutline } from "ionicons/icons";
import { rocketOutline } from "ionicons/icons";
import { logoGoogle } from "ionicons/icons";
import { mailOutline } from "ionicons/icons";
import { earthOutline } from "ionicons/icons";
import { logoWebComponent } from "ionicons/icons";
import { shuffleOutline } from "ionicons/icons";
import { logInOutline } from "ionicons/icons";

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
          <li class="navbar-dropdown">
            <a className="navbar-link">Hosting</a>
            <div class="dropdown">
              <a href="#">
                <IonIcon icon={serverOutline} className="cart-icon"></IonIcon>
                Web Hosting
              </a>
              <a href="#">
                <IonIcon icon={cloudOutline} className="cart-icon"></IonIcon>
                Cloud Hosting
              </a>
              <a href="#">
                <IonIcon icon={logoWordpress} className="cart-icon"></IonIcon>
                WordPress Hosting
              </a>
            </div>
          </li>
          <li class="navbar-dropdown">
            <a className="navbar-link">VPS</a>
            <div class="dropdown">
              <a href="#">
                <IonIcon icon={browsersOutline} className="cart-icon"></IonIcon>
                VPS Hosting
              </a>
              <a href="#">
                <IonIcon icon={globeOutline} className="cart-icon"></IonIcon>
                CyberPanel Hosting
              </a>
              <a href="#">
                <IonIcon icon={rocketOutline} className="cart-icon"></IonIcon>
                Minecraft Server Hosting
              </a>
            </div>
          </li>
          <li class="navbar-dropdown">
            <a className="navbar-link">Email</a>
            <div class="dropdown">
              <a href="#">
                <IonIcon
                  icon={logoGoogle}
                  className="cart-icon"
                ></IonIcon>
                Google Workspace Email Hosting
              </a>
              <a href="#">
                <IonIcon
                  icon={mailOutline}
                  className="cart-icon"
                ></IonIcon>
                Hostinger Email Hosting
              </a>
            </div>
          </li>
          <li class="navbar-dropdown">
            <a className="navbar-link">Domain</a>
            <div class="dropdown">
              <a href="#">
                <IonIcon
                  icon={earthOutline}
                  className="cart-icon"
                ></IonIcon>
                Domain Name Search
              </a>
              <a href="#">
                <IonIcon
                  icon={logoWebComponent}
                  className="cart-icon"
                ></IonIcon>
                WHOIS Lookup
              </a>
              <a href="#">
                <IonIcon
                  icon={shuffleOutline}
                  className="cart-icon"
                ></IonIcon>
                Domain Transfer
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="btns flex">
        <a href="" className="log-button flex">
          <IonIcon icon={logInOutline} className="cart-icon"></IonIcon>
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
