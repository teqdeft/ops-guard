import React from 'react'
import redarrow from '../../assets/images/red_arrow.png';
import { NavLink } from 'react-router-dom'

const ReadArticleBtn = () => {
  return (
    <NavLink to="/blog-details" type="button" className="theme-outline-button">
    Read Full Article
    <span>
      <img src={redarrow} alt="" />
    </span>
  </NavLink>
  )
}

export default ReadArticleBtn
