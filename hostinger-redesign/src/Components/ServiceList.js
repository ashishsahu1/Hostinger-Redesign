import React from "react";
import "./ServiceList.css";
import { IonIcon } from "@ionic/react";
import { shieldCheckmarkOutline } from "ionicons/icons";
import { keyOutline } from "ionicons/icons";
import { settingsOutline } from "ionicons/icons";
import { rocketOutline } from "ionicons/icons";
import { folderOutline } from "ionicons/icons";
import { cloudDoneOutline } from "ionicons/icons";
import { speedometerOutline } from "ionicons/icons";
import { logoWordpress } from "ionicons/icons";
import { handRightOutline } from "ionicons/icons";
import { chatbubblesOutline } from "ionicons/icons";
import { bookmarksOutline } from "ionicons/icons";
import { medalOutline } from "ionicons/icons";

function ServiceList() {
  
  return (
    <div className="sl">
      <div className="cnt-sl">
        <h2>Our services include:</h2>
        <div className="ser-lst">
          <div className="si-li flex">
            <IonIcon
              icon={shieldCheckmarkOutline}
              className="fet-icon"
            ></IonIcon>
            <p>Free SSL</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={keyOutline} className="fet-icon"></IonIcon>
            <p>Access Management</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={settingsOutline} className="fet-icon"></IonIcon>
            <p>eCommerce Optimization</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={rocketOutline} className="fet-icon"></IonIcon>
            <p>Free Migration</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={folderOutline} className="fet-icon"></IonIcon>
            <p>Automated backups</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={cloudDoneOutline} className="fet-icon"></IonIcon>
            <p>DDoS Protection</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={speedometerOutline} className="fet-icon"></IonIcon>
            <p>PHP Speed Boost</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={logoWordpress} className="fet-icon"></IonIcon>
            <p>LiteSpeed Cache Plugin</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={handRightOutline} className="fet-icon"></IonIcon>
            <p>One-Click WordPress Installation</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={chatbubblesOutline} className="fet-icon"></IonIcon>
            <p>24/7/365 Tech Support</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={bookmarksOutline} className="fet-icon"></IonIcon>
            <p>Auto Script Installer</p>
          </div>
          <div className="si-li flex">
            <IonIcon icon={medalOutline} className="fet-icon"></IonIcon>
            <p>99.9% Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
