import React from 'react'
import service2 from "../../assets/images/service-icon-2.svg"

const HackingCard = () => {
  return (
    <div className="service-grid-item">
    <div className="service-grid-outer">
    <div className="icon-section">
        <img src={service2} alt=""/>
    </div>
    <div className="service-grid-content">
     <h3>Hacking</h3>
     <p>Our hacking services use ethical penetration testing to simulate attacks and identify vulnerabilities before they can be exploited.</p>
    </div>
    </div>
    <div className="service-grid-hover">
        <div className="grid-hover-heading">
           <h3><span><img src={service2}  alt=""/></span> Hacking</h3>
        </div>
        <div className="hover-content-outer">
        <div className="grid-hover-content">
            <h4>Red Teaming</h4>
            <p>Master the Attack to Fortify the Defense.</p>
        </div>
        <div className="grid-hover-content">
            <h4>Phishing</h4>
            <p>Unseen Hooks in a Sea of Trust.</p>
        </div>
        <div className="grid-hover-content">
            <h4>Social Engineering</h4>
            <p>Exploiting the Weakest Link in the Chain: Human Nature</p>
        </div>
    </div>
    </div>

</div>
  )
}

export default HackingCard
