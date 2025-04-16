import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
           <img className='footerlogo' src={assets.headerlogo1} alt=''  />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur ipsam dolorem nostrum molestias eveniet doloremque incidunt delectus ea magnam nemo, odit fuga, distinctio ad vel cum blanditiis nihil reiciendis!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <a href='/'><li>Home </li></a>
                    <li>About us</li>
                    <li>Delivery</li>
                   <a href='https://www.termsfeed.com/live/77a35cbb-6be0-46ed-8469-e0d34731573b'><li>Privacy policy</li></a> 
                </ul>
                </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-6309376010</li>
                <a href="https://accounts.google.com/signout/chrome/landing?continue=https%3A%2F%2Fmail.google.com%2Fmail&oc=https%3A%2F%2Fmail.google.com%2Fmail&hl=en-GB"> <li>byuvarajbyuvaraj17@gmail.com</li></a>
                <li>Chennai</li>

              </ul>

            </div>
           
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025 © Yuva.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer