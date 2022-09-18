import React from "react";
import "./HeroSection.css";
import banner from '../assets/banner.png'

function HeroSection() {
  return (
    <div className="hero">
      <div className="header">
        <div className="inner-header flex">
          <div className="titl">
            <h1>Everything You Need to Create a Website</h1>
            <p>
              Join 1,278,620 website owners who are building their businesses
              online.
            </p>
            <button className="str-btn">Get Started</button>
          </div>
          <div className="hdimg">
            <img
              src={banner}
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
