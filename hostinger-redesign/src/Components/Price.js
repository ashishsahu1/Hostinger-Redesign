import React from "react";
import "./Price.css";

function Price() {
  return (
    <>
      <div className="txt">
        <h2>All-In-One Web Hosting</h2>
        <p>
          We prepared the best web hosting plan for you to start. You will be
          able to adjust plans as you go - our custom-built algorithm will
          provide suggestions based on your usage.
        </p>
      </div>
      <div className="price flex">
        <div className="contt ni1 flex">
          <div className="fet-item">
            <p>
              ✔️ <b>Unmetered</b> traffic (Unlimited GB)
            </p>
            <p>
              ✔️ <b>100</b> Websites
            </p>
            <p>
              ✔️ <b>100 GB</b> SSD Storage
            </p>
            <p>
              ✔️ <b>Free</b> Weekly Backups
            </p>
          </div>
        </div>
        <div className="contt mn">
          <h2>Best Web Hosting</h2>
          <hr></hr>
          <div className="intxt">
            <h3>
              ₹149.00
              <span>/mo</span>
            </h3>
            <p>₹249.00/mo when you renew</p>
            <button type="submit">Select</button>
          </div>
          <a className="ft" href="#">
            All Features
          </a>
        </div>
        <div className="contt ni2  flex">
          <div className="fet-item">
            <p>
              ✔️ <b>Unlimites</b> Free SSL
            </p>
            <p>
              ✔️ <b>Free</b> Domain
            </p>
            <p>
              ✔️ <b>Free</b> Email
            </p>
            <p>
              ✔️ <b>Optimized</b> for WordPress
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
