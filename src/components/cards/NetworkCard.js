import React from 'react'
import service5 from "../../assets/images/service-icon-5.svg"

const NetworkCard = () => {
    return (
        <div className="service-grid-item">
            <div className="service-grid-outer">
                <div className="icon-section">
                    <img src={service5} alt="" />
                </div>
                <div className="service-grid-content">
                    <h3>Network Security</h3>
                    <p>Our computer security solutions safeguard systems and data, keeping businesses secure from cyber threats.</p>
                </div>
            </div>
            <div className="service-grid-hover">
                <div className="grid-hover-heading">
                    <h3><span><img src={service5} alt="" /></span> Network Security</h3>
                </div>
                <div className="hover-content-outer">
                    <div className="grid-hover-content">
                        <h4>Next Generation Firewall</h4>
                        <p>Smart Defense for Evolving Threats</p>
                    </div>
                    <div className="grid-hover-content">
                        <h4>Web Application & API Security</h4>
                        <p>Shield Your Applications, Secure Your Data</p>
                    </div>
                    <div className="grid-hover-content">
                        <h4>Secure Privileged Access Management</h4>
                        <p>Control Access, Protect What Matters Most</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NetworkCard
