import React from 'react'
import service6 from "../../assets/images/service-icon-6.svg"


const CloudCard = () => {
    return (
        <div className="service-grid-item">
            <div className="service-grid-outer">
                <div className="icon-section">
                    <img src={service6} alt="" />
                </div>
                <div className="service-grid-content">
                    <h3>Cloud Security</h3>
                    <p>Our cloud security services protect your data and applications from unauthorized access and cyber threats.</p>
                </div>
            </div>
            <div className="service-grid-hover">
                <div className="grid-hover-heading">
                    <h3><span><img src={service6} alt="" /></span>Cloud Security</h3>
                </div>
                <div className="hover-content-outer">
                    <div className="grid-hover-content">
                        <h4>Data Encryption in the Cloud</h4>
                        <p>Locking Down Your Data in the Sky</p>
                    </div>
                    <div className="grid-hover-content">
                        <h4>Cloud Misconfiguration Vulnerabilities</h4>
                        <p>One Misstep, A Thousand Breaches</p>
                    </div>
                    <div className="grid-hover-content">
                        <h4>Identity and Access Management</h4>
                        <p>Controlling Access, Securing the Cloud</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CloudCard
