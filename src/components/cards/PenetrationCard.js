import React from 'react'
import service3 from "../../assets/images/service-icon-3.svg"

const PenetrationCard = () => {
    return (
        <div className="service-grid-item">
            <div className="service-grid-outer">
                <div className="icon-section">
                    <img src={service3} alt="" />
                </div>
                <div className="service-grid-content">
                    <h3>Penetration Testing</h3>
                    <p>Our penetration testing uncovers vulnerabilities by simulating attacks, helping businesses strengthen their defenses.</p>
                </div>
            </div>
            <div className="service-grid-hover">
                <div className="grid-hover-heading">
                    <h3><span><img src={service3} alt="" /></span> Penetration Testing</h3>
                </div>
                <div className="hover-content-outer">
                    <div className="grid-hover-content">
                        <h4>Red Team vs. Blue Team Exercises</h4>
                        <p>Simulate the Attack, Strengthen the Defense</p>
                    </div>
                    <div className="grid-hover-content">
                        <h4>Cloud Penetration Testing</h4>
                        <p>Exposing the Weaknesses in the Digital Sky</p>
                    </div>
                    <div className="grid-hover-content">
                        <h4>Social Engineering Attacks</h4>
                        <p>Unmasking the Human Element in Cybersecurity</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PenetrationCard
