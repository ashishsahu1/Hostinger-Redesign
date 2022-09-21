import React from "react";
import "./Search.css";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

function Search() {
  return (
    <div className="search-section">
      <div className="ser-sec">
        <h2>Find the perfect domain name</h2>
        <p>
          Enter domain name of your choice and pick any extension name on the
          next step (choose between .in, .com, .online, .live, .store, .info and
          many more)
        </p>
        <div className="wrap flex">
          <div className="search-bar">
            <input
              type="text"
              className="searchTerm"
              placeholder="Type in the perfect domain name"
            />
            <button type="submit" className="searchButton">
              <IonIcon icon={search} className="search-icon"></IonIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
