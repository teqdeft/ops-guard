import React from 'react'
import service from "../../assets/images/service-icon-1.svg"

const CyberSecurityCard = () => {
  return (
    <div className="service-grid-item">
    <div className="service-grid-outer">
        <div className="icon-section">
            <img src={service} alt=""/>
        </div>
        <div className="service-grid-content">
         <h3>Cybersecurity</h3>
         <p>Our focus on cutting-edge research allows us to provide clients with innovative, future-proof defense mechanisms.</p>
        </div>
    </div>
    <div className="service-grid-hover">
        <div className="grid-hover-heading">
           <h3><span><img src={service} alt=""/></span> Cybersecurity</h3>
        </div>
        <div className="hover-content-outer">
            <div className="grid-hover-content">
                <h4>Zero Trust Architecture</h4>
                <p>Never Trust, Always Verify</p>
            </div>
            <div className="grid-hover-content">
                <h4>AI-Powered Threat Detection</h4>
                <p>Harnessing Intelligence to Outsmart Cybercriminals</p>
            </div>
            <div className="grid-hover-content">
                <h4>Ransomware Defense & Recovery</h4>
                <p>Stay One Step Ahead of Digital Extortion</p>
            </div>
        </div>
    
    </div>


</div>
  )
}

export default CyberSecurityCard
