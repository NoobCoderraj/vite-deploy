import React from 'react'



import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaBehance, FaDribbble } from "react-icons/fa";

import profileImg from "../../assets/profile-img.png";
export const Home = () => {
  return (
    <section className='home' >
    <div className='home__container container'>
      <p className='home__subtitle text-cs'>
        Hello, <span>My Name Is</span>
      </p>

      <h1 className='home__title text-cs'>
        <span>RAJ</span> CHAUHAN
      </h1>

      <p className="home_job">
        <span className='text-cs'>I Am</span> <b>Android And Software Developer</b>
      </p>

      <p className='home__text'>
        Passionate Android Developer committed to continuous growth and innovation in mobile app development.
        Skilled in crafting impactful experiences and eager to collaborate on innovative projects
      </p>

      

      
    </div>
  </section>
  )
}
