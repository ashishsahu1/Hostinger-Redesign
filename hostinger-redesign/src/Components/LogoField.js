import React from 'react'
import './LogoField.css'
import wp from '../assets/wp.png'
import ls from "../assets/ls.png";
import cf from "../assets/cf.png";

function LogoField() {
  return (
    <div className='logoField flex'>
        <img src={wp} alt="" srcset="" />
        <img src={ls} alt="" srcset="" />
        <img src={cf} alt="" srcset="" />
    </div>
  )
}

export default LogoField