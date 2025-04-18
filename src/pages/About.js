import React from 'react'
import industrylogo1 from "../assets/images/industry-logo-1.svg"
import industrylogo2 from "../assets/images/industry-logo-2.svg"
import industrylogo3 from "../assets/images/industry-logo-3.svg"
import industrylogo4 from "../assets/images/industry-logo-4.svg"
import industrylogo5 from "../assets/images/industry-logo-5.svg"
import industrylogo6 from "../assets/images/industry-logo-6.svg"
import whitelogo from "../assets/images/white_logo.svg"
import { NavLink } from 'react-router-dom'
import GetStartedBtn from '../components/buttons/GetStartedBtn'

const About = (props) => {
    return (
        <div className="line_overlay">
            <div className="hero-wrapper about_wrapper">
                <div className="custom-container">
                    <div className="hero-wrapper-inner">
                        <h1>{props.title} <span> OPS</span>GUARD</h1>
                    </div>
                </div>
            </div>
            {/* BANNER-COMPONENT-END-HERE */}
            {/* HOME-SERVICE-COMPONENT-START-HERE */}
            <div className="home-service-section about_service_section">
                <div className="custom-container">
                    <div className="home-service-inner">
                        <div className="home-service-heading">
                            <h2>Let’s secure your tomorrow, today</h2>
                            <p>At the forefront of cybersecurity innovation, we specialize in delivering cutting-edge solutions that protect businesses from the ever-evolving digital threats. From penetration testing and malware analysis to advanced hacking techniques, our team is dedicated to securing your most critical assets.</p>
                            <p>Our expertise spans a wide array of services, including offensive security strategies, red teaming, and the development of AI-powered malware detection systems. We take pride in offering thorough research, impactful insights, and actionable solutions that ensure your organization remains resilient in the face of cyberattacks.</p>
                            <p>Whether you’re a publicly listed corporation or a medium-sized business, our mission is to provide customized cybersecurity strategies that address your unique challenges. We work hand-in-hand with your team to identify vulnerabilities, strengthen defenses, and implement best practices that safeguard your data, systems, and reputation.</p>
                            <p>This platform serves as both a showcase of our capabilities and a hub for sharing groundbreaking concepts in cybersecurity. Here, you’ll find research results, industry trends, and emerging technologies that are shaping the future of digital defense.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* HOME-SERVICE-COMPONENT-END-HERE */}
            {/* INDUSTRY-CERTIFICATION-COMPONENTS-START-HERE */}
            <div className="industry-certification">
                <div className="custom-container">
                    <div className="industry-section-inner">
                        <div className="industry-heading">
                            <h2>Industry Certifications</h2>
                        </div>
                        <div className="industry-image-grid">
                            <div className="image-grid-item">
                                <img src={industrylogo1} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo2} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo6} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo3} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo4} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* INDUSTRY-CERTIFICATION-COMPONENTS-END-HERE */}
            {/* HOME-BLOGS-COMPONENT-START-HERE */}
            <div className="home-blogs-section about_blogs">
                <div className="custom-container">
                    <div className="home-blogs-inner">
                        <div className="home-blogs-heading">
                            <h2>Our Projects</h2>
                        </div>
                        <div className="blogs-grid">
                            <div className="blogs-grid-item">
                                <div className="img-section">
                                    <NavLink to="/"><img src={whitelogo} alt="" /></NavLink>
                                </div>
                                <NavLink to="/">
                                    <div className="blog-grid-content">
                                        <h3>Comprehensive Cybersecurity Audit for a Publicly Listed Company</h3>
                                        <h5><span>Client:</span> Global Finance Corporation</h5>
                                        <h5><span>Scope:</span> Penetration Testing & Threat Simulation</h5>
                                        <p>We conducted an extensive penetration testing and red teaming operation for a multinational financial institution. Our team simulated real-world cyberattacks, testing the organization’s response to advanced persistent threats (APTs). By identifying critical vulnerabilities and demonstrating the potential impact of breaches, we helped the company reinforce their defenses and implement new cybersecurity protocols.</p>
                                        <h6>Key Outcome:</h6>
                                        <h5>Identified and mitigated over 50 critical vulnerabilities</h5>
                                        <h5>Reduced exposure to phishing and social engineering attacks</h5>
                                        <h5>Delivered a comprehensive threat analysis report</h5>

                                    </div>
                                </NavLink>
                            </div>
                            <div className="blogs-grid-item">
                                <div className="img-section">
                                    <NavLink to="/"><img src={whitelogo} alt="" /></NavLink>
                                </div>
                                <NavLink to="/">
                                    <div className="blog-grid-content">
                                        <h3>Securing Web Application & API for a Medium-Sized E-commerce Company</h3>
                                        <h5><span>Client:</span> SecureMart</h5>
                                        <h5><span>Scope:</span> Web Application & API  </h5>
                                        <p>SecureMart, a growing e-commerce platform, partnered with us to secure their web application and APIs, which were at risk of being compromised by various attacks such as SQL injection, cross-site scripting, and API abuse. We conducted in-depth security assessments, automated testing, and manual code reviews to identify potential loopholes. As a result, the platform is now equipped with advanced security mechanisms that protect both user data and business-critical operations.</p>
                                        <h6>Key Outcome:</h6>
                                        <h5>Implemented multi-layered web application firewalls </h5>
                                        <h5>Hardened API authentication mechanisms</h5>
                                        <h5>Ensured compliance with PCI-DSS standards</h5>

                                    </div>
                                </NavLink>
                            </div>
                            <div className="blogs-grid-item">
                                <div className="img-section">
                                    <NavLink to="/"><img src={whitelogo} alt="" /></NavLink>
                                </div>
                                <NavLink to="/">
                                    <div className="blog-grid-content">
                                        <h3>Developing an AI-Powered Malware Detection System for a Telecom Giant</h3>
                                        <h5><span>Client:</span>NexaTel Communications</h5>
                                        <h5><span>Scope:</span> Research & AI-Based Defense</h5>
                                        <p>We collaborated with NexaTel Communications to develop a next-generation malware detection system using AI and machine learning. Our research team analyzed emerging malware trends and built a system capable of detecting zero-day threats in real time. The AI model continuously learns from new data, improving its ability to recognize sophisticated malware before it spreads across the network.</p>
                                        <h6>Key Outcome:</h6>
                                        <h5>Reduced malware response time by 70%</h5>
                                        <h5>Enhanced detection accuracy for zero-day vulnerabilities</h5>
                                        <h5>Created a custom malware database for ongoing analysis</h5>

                                    </div>
                                </NavLink>
                            </div>

                        </div>
                        <div className="blogs-button">
                            <GetStartedBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About
