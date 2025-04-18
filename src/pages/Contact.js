import React from 'react'
import calltoaction from "../assets/images/callto-action-bg.png"
import ContactCheckbox from '../components/checkbox/ContactCheckbox'


const Contact = (props) => {
    return (
        <>
            <div className="line_overlay">

                {/* BANNER-COMPONENT-START-HERE */}
                <div className="hero-wrapper about_wrapper contact_banner">
                    <div className="custom-container">
                        <div className="hero-wrapper-inner">
                            <h1>{props.title} </h1>
                        </div>
                    </div>
                </div>
                {/* BANNER-COMPONENT-END-HERE  */}
                {/* CALL TO ACTION COMPONENTS START HERE */}
                <div className="call-to-action  contact-inquiries">
                    <div className="img-section">
                        <img src={calltoaction} alt="" />
                    </div>
                    <div className="custom-container">

                        <div className="call-to-action-main">
                            <div className="call-to-action-main-left">
                                <div className="call-to-action-main-left-inner">
                                    <div className="call-to-action-main-left-inner-heading">
                                        <h2>Inquiries</h2>
                                    </div>
                                    <div className="call-to-action-main-left-inner-bottom">
                                        <div className="direct-call">
                                            <p> <span>Direct Call: </span><br />
                                                <a href="tel:(415) 907-7084">(415) 907-7084</a></p>
                                        </div>
                                        <div className="Email-innner  direct-call">
                                            <p> <span>Email: </span><br />
                                                <a href="mailto:infro@opsguard.com">infro@opsguard.com</a></p>
                                        </div>
                                        <div className="address-innner direct-call">
                                            <p> <span>Address:</span><br />
                                                1390 Market Street, Suite 200 <br /> San Francisco California 94102</p>
                                        </div>
                                        <div className="address-innner direct-call-2">
                                            <p> <span>Hours:</span><br />
                                                09:00-17:30, Mon-Fri</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="call-to-action-right">
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
                                            <div className="form-content checkbox">
                                                <ContactCheckbox />
                                            </div>
                                        </div>
                                        <button type="submit" className="theme-blue-button">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
