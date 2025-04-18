import React from 'react'
import arrow from "../../assets/images/arrow-img.png"
import { NavLink } from 'react-router-dom'



const GetStartedBtn = () => {

  return (
    
      <NavLink to="/blog" className="theme-red-button">Get Started Now <span><img src={arrow} alt="" /></span></NavLink>
    
  )
}

export default GetStartedBtn
