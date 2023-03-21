import React from 'react'
import img1 from './../../assets/unicorn.png'
import img2 from "./../../assets/logo.png"
import './logo.css'
const Logo = () => {
  return (
    <div className='client-wrap'>
        <h1>Our Clients</h1>
        <hr />
        <div className='client-in'>
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </li>
                <li>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </li>
                <li>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </li>
                <li>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </li>
                <li>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </li>
                <li>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Logo