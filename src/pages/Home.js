import React from 'react'
import banner from "../assets/images/banner-right.png"
import blog1 from "../assets/images/blogs-img-1.png"
import blog2 from "../assets/images/blogs-img-2.png"
import blog3 from "../assets/images/blogs-img-3.png"
import industrylogo1 from "../assets/images/industry-logo-1.svg"
import industrylogo2 from "../assets/images/industry-logo-2.svg"
import industrylogo3 from "../assets/images/industry-logo-3.svg"
import industrylogo4 from "../assets/images/industry-logo-4.svg"
import industrylogo5 from "../assets/images/industry-logo-5.svg"
import industrylogo6 from "../assets/images/industry-logo-6.svg"
import calltoaction from "../assets/images/callto-action-bg.png"
import contactmobile from "../assets/images/contact_mobile_bg.png"
import { NavLink } from 'react-router-dom'
import GetStartedBtn from '../components/buttons/GetStartedBtn'
import LearnMoreBtn from '../components/buttons/LearnMoreBtn'
import ViewMoreArticleBtn from '../components/buttons/ViewMoreArticleBtn'
import CyberSecurityCard from '../components/cards/CyberSecurityCard'
import HackingCard from '../components/cards/HackingCard'
import PenetrationCard from '../components/cards/PenetrationCard'
import MalwareCard from '../components/cards/MalwareCard'
import NetworkCard from '../components/cards/NetworkCard'
import CloudCard from '../components/cards/CloudCard'



const Home = (props) => {
    return (
        <div className="line_overlay">
            <div className="hero-wrapper">
                <div className="custom-container">
                    <div className="hero-wrapper-inner">
                        <div className="hero-content">
                            <h1>{props.title} </h1>
                            <div className="hero-button-section">
                                <GetStartedBtn />
                                <LearnMoreBtn />

                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* BANNER-COMPONENT-END-HERE */}
            {/* HOME-SERVICE-COMPONENT-START-HERE */}
            <div className="home-service-section">
                <div className="custom-container">
                    <div className="home-service-inner">
                        <div className="home-service-heading">
                            <h2>Securing your digital transformation</h2>
                            <p>Through cutting-edge research and innovative solutions, we help companies stay ahead of evolving cyber threats and maintain robust digital defenses.</p>
                        </div>
                        <div className="service-grid-section">
                            <CyberSecurityCard />
                            <HackingCard />
                            <PenetrationCard />
                            <MalwareCard />
                            <NetworkCard />
                            <CloudCard />
                        </div>
                    </div>
                </div>
            </div>
            {/* HOME-SERVICE-COMPONENT-END-HERE */}
            {/* HOME-BLOGS-COMPONENT-START-HERE */}
            <div className="home-blogs-section">
                <div className="custom-container">
                    <div className="home-blogs-inner">
                        <div className="home-blogs-heading">
                            <h2>Blog & Resources</h2>
                        </div>
                        <div className="blogs-grid">
                            <div className="blogs-grid-item">
                                <div className="img-section">
                                    <NavLink to="/"><img src={blog1} alt="" /></NavLink>
                                </div>
                                <NavLink to="/">
                                    <div className="blog-grid-content">
                                        <h6>Dexter Morgan • 17 Sep 2024</h6>
                                        <h3>Bypassing Hardened Android Applications</h3>
                                        <p>Recently, we performed a penetration test on an Android application available...</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="blogs-grid-item">
                                <div className="img-section">
                                    <NavLink to="/"><img src={blog2} alt="" /></NavLink>
                                </div>
                                <NavLink to="/">
                                    <div className="blog-grid-content">
                                        <h6>Dexter Morgan • 17 Sep 2024</h6>
                                        <h3>Path Traversal to Remote Code Execution</h3>
                                        <p>In this blog post, Sanjay from the NotSoSecure Training team describes an...</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="blogs-grid-item">
                                <div className="img-section">
                                    <NavLink to="/"><img src={blog3} alt="" /></NavLink>
                                </div>
                                <NavLink to="/">
                                    <div className="blog-grid-content">
                                        <h6>Dexter Morgan • 17 Sep 2024</h6>
                                        <h3>Tool Release: Serialized Payload Generator</h3>
                                        <p>TL;DR: A new tool released https://github.com/NotSoSecure/...</p>
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                        <div className="blogs-button">
                            <ViewMoreArticleBtn />
                        </div>
                    </div>
                </div>
            </div>
            {/* HOME-BLOGS-COMPONENT-END-HERE */}
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
                                <img src={industrylogo3} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo4} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo5} alt="" />
                            </div>
                            <div className="image-grid-item">
                                <img src={industrylogo6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* INDUSTRY-CERTIFICATION-COMPONENTS-END-HERE */}
            {/* CALL TO ACTION COMPONENTS START HERE */}
            <div className="call-to-action">
                <div className="img-section">
                    <img src={calltoaction} alt="" className="home_contact_desktop" />
                    <img src={contactmobile} alt="" className="mobile_contact" />



                </div>
                <div className="custom-container">
                    <div className="callto-action-heading">
                        <h2>Get in touch</h2>
                        <p>Our friendly team would love to hear from you.</p>
                    </div>
                    <div className="call-form">
                        <form>
                            <div className="form-outer">
                                <div className="form-content">
                                    <label>First name</label>
                                    <div className="form-controls">
                                        <input type="text" placeholder="First name" />
                                    </div>

                                </div>
                                <div className="form-content">
                                    <label>Last name</label>
                                    <div className="form-controls">
                                        <input type="text" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="form-content">
                                    <label>Email</label>
                                    <div className="form-controls">
                                        <input type="email" placeholder="you@company.com" />
                                    </div>
                                </div>
                                <div className="form-content">
                                    <label>Phone number</label>
                                    <div className="form-controls">
                                        <input type="tel" placeholder="US +1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div className="form-content textarea">
                                    <label>Message</label>
                                    <div className="form-controls">
                                        <textarea placeholder=""></textarea>
                                    </div>
                                </div>
                                <div className="form-content">
                                    <label className="container_new">You agree to our friendly privacy policy.
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="theme-blue-button">Send Message</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
