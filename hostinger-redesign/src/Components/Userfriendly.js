import React from "react";
import "./UserFriendly.css";
import dash from "../assets/dash.png";
import { IonIcon } from "@ionic/react";
import { shieldCheckmarkOutline } from "ionicons/icons";

function Userfriendly() {
  return (
    <div className="userfriend-section">
      <div className="userfriend-title">
        <h2>User-Friendly Control Panel</h2>
      </div>
        <div className="userfriend-img">
          <img className="dash" src={dash} alt="logo" srcset="" />
        </div>
        <div className="userfriend-tiles">
          <div className="fd-tt">
            <div className="fd-ttt">
              <IonIcon
                icon={shieldCheckmarkOutline}
                className="fd-icon"
              ></IonIcon>
              <h3>Ease to use</h3>
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
          </div>
          <div className="fd-tt">
            <div className="fd-ttt">
              <IonIcon
                icon={shieldCheckmarkOutline}
                className="fd-icon"
              ></IonIcon>
              <h3>Ease to use</h3>
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
          </div>
          <div className="fd-tt">
            <div className="fd-ttt">
              <IonIcon
                icon={shieldCheckmarkOutline}
                className="fd-icon"
              ></IonIcon>
              <h3>Ease to use</h3>
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Userfriendly;
