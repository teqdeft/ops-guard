import React from 'react'
import { NavLink } from 'react-router-dom'

const LearnMoreBtn = () => {
  return (
    <div>
      <NavLink to="/about" className="theme-outline-button">Learn more </NavLink>
    </div>
  )
}

export default LearnMoreBtn
