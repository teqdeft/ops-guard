import React from 'react';
import Cybersecurity from '../assets/images/Cybersecurity.png';
import cybericon from '../assets/images/cyber-icon.png';
import checkcircle from '../assets/images/check_circle.png';
import checkCircleRed from '../assets/images/check_circle-red.png';
import hackingImage from '../assets/images/heacking-1.png';
import unionIcon from '../assets/images/Union.png';
import testingImage from '../assets/images/testing.png';
import testingLogo from '../assets/images/testing-logo.png';
import malwareImage from '../assets/images/hacking.png';
import malwareLogo from '../assets/images/Malware-logo.png';
import networkSecurityImage from '../assets/images/Network Security.png';
import networkLogo from '../assets/images/network-logo.png';
import cloudImage from '../assets/images/cloud.png';
import cloudLogo from '../assets/images/cloud-logo.png';
import GetStartedBtn from "../components/buttons/GetStartedBtn"
import LearnMoreBtn from '../components/buttons/LearnMoreBtn';


const servicesData = [
  {
    sectionClass: 'Cybersecurity',
    title: 'Cybersecurity',
    mainImage: Cybersecurity,
    mainImageAlt: '',
    icon: cybericon,
    iconAlt: '',
    content: [
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkcircle, imageAlt: '' },
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkcircle, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkcircle, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkcircle, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkcircle, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkcircle, imageAlt: '' },
    ],
    description: `Our Cybersecurity services provide end-to-end protection against today’s most advanced digital threats. We specialize in proactive defense strategies, including threat hunting, vulnerability assessments, and penetration testing to uncover hidden risks.
    By leveraging cutting-edge technologies and industry best practices, we help safeguard your sensitive data, secure critical systems, and ensure regulatory compliance. From network security to cloud and application security, our tailored solutions are designed to keep your business safe from evolving cyberattacks.`,
  },
  {
    sectionClass: 'Hacking',
    title: 'Hacking',
    mainImage: hackingImage,
    mainImageAlt: '',
    icon: unionIcon,
    iconAlt: '',
    content: [
      { title: 'Red Teaming', description: 'Master the Attack to Fortify the Defense.', image: checkCircleRed, imageAlt: '' },
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkCircleRed, imageAlt: '' },
      { title: 'Phishing', description: 'Unseen Hooks in a Sea of Trust.', image: checkCircleRed, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkCircleRed, imageAlt: '' },
      { title: 'Social Engineering', description: 'Exploiting the Weakest Link in the Chain: Human Nature.', image: checkCircleRed, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkCircleRed, imageAlt: '' },
    ],
    description: `Our Cybersecurity services provide end-to-end protection against today’s most advanced digital threats. We specialize in proactive defense strategies, including threat hunting, vulnerability assessments, and penetration testing to uncover hidden risks.
    By leveraging cutting-edge technologies and industry best practices, we help safeguard your sensitive data, secure critical systems, and ensure regulatory compliance. From network security to cloud and application security, our tailored solutions are designed to keep your business safe from evolving cyberattacks.`,
  },
  {
    sectionClass: 'Penetration-Testing',
    title: 'Penetration Testing',
    mainImage: testingImage,
    mainImageAlt: '',
    icon: testingLogo,
    iconAlt: '',
    content: [
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkcircle, imageAlt: '' },
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkcircle, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkcircle, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkcircle, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkcircle, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkcircle, imageAlt: '' },
    ],
    description: `Our Cybersecurity services provide end-to-end protection against today’s most advanced digital threats. We specialize in proactive defense strategies, including threat hunting, vulnerability assessments, and penetration testing to uncover hidden risks.
    By leveraging cutting-edge technologies and industry best practices, we help safeguard your sensitive data, secure critical systems, and ensure regulatory compliance. From network security to cloud and application security, our tailored solutions are designed to keep your business safe from evolving cyberattacks.`,
  },
  {
    sectionClass: 'Malware-Development',
    title: 'Malware Development',
    mainImage: malwareImage,
    mainImageAlt: '',
    icon: malwareLogo,
    iconAlt: '',
    content: [
      { title: 'Red Teaming', description: 'Master the Attack to Fortify the Defense.', image: checkCircleRed, imageAlt: '' },
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkCircleRed, imageAlt: '' },
      { title: 'Phishing', description: 'Unseen Hooks in a Sea of Trust.', image: checkCircleRed, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkCircleRed, imageAlt: '' },
      { title: 'Social Engineering', description: 'Exploiting the Weakest Link in the Chain: Human Nature.', image: checkCircleRed, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkCircleRed, imageAlt: '' },
    ],
    description: `Our Cybersecurity services provide end-to-end protection against today’s most advanced digital threats. We specialize in proactive defense strategies, including threat hunting, vulnerability assessments, and penetration testing to uncover hidden risks.
    By leveraging cutting-edge technologies and industry best practices, we help safeguard your sensitive data, secure critical systems, and ensure regulatory compliance. From network security to cloud and application security, our tailored solutions are designed to keep your business safe from evolving cyberattacks.`,
  },
  {
    sectionClass: 'Network-Security',
    title: 'Network Security',
    mainImage: networkSecurityImage,
    mainImageAlt: '',
    icon: networkLogo,
    iconAlt: '',
    content: [
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkcircle, imageAlt: '' },
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkcircle, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkcircle, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkcircle, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkcircle, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkcircle, imageAlt: '' },
    ],
    description: `Our Cybersecurity services provide end-to-end protection against today’s most advanced digital threats. We specialize in proactive defense strategies, including threat hunting, vulnerability assessments, and penetration testing to uncover hidden risks.
    By leveraging cutting-edge technologies and industry best practices, we help safeguard your sensitive data, secure critical systems, and ensure regulatory compliance. From network security to cloud and application security, our tailored solutions are designed to keep your business safe from evolving cyberattacks.`,
  },
  {
    sectionClass: 'Cloud Security',
    title: 'Cloud Security',
    mainImage: cloudImage,
    mainImageAlt: '',
    icon: cloudLogo,
    iconAlt: '',
    content: [
      { title: 'Red Teaming', description: 'Master the Attack to Fortify the Defense.', image: checkCircleRed, imageAlt: '' },
      { title: 'Zero Trust Architecture', description: 'Never Trust, Always Verify', image: checkCircleRed, imageAlt: '' },
      { title: 'Phishing', description: 'Unseen Hooks in a Sea of Trust.', image: checkCircleRed, imageAlt: '' },
      { title: 'AI-Powered Threat Detection', description: 'Harnessing Intelligence to Outsmart Cybercriminals', image: checkCircleRed, imageAlt: '' },
      { title: 'Social Engineering', description: 'Exploiting the Weakest Link in the Chain: Human Nature.', image: checkCircleRed, imageAlt: '' },
      { title: 'Ransomware Defense & Recovery', description: 'Stay One Step Ahead of Digital Extortion', image: checkCircleRed, imageAlt: '' },
    ],
    description: `Our Cybersecurity services provide end-to-end protection against today’s most advanced digital threats. We specialize in proactive defense strategies, including threat hunting, vulnerability assessments, and penetration testing to uncover hidden risks.
    By leveraging cutting-edge technologies and industry best practices, we help safeguard your sensitive data, secure critical systems, and ensure regulatory compliance. From network security to cloud and application security, our tailored solutions are designed to keep your business safe from evolving cyberattacks.`,
  },
];

const Services = (props) => {
  return (
    <div className="line_overlay">
      
      <div className="hero-wrapper about_wrapper service_banner">
        <div className="custom-container">
          <div className="hero-wrapper-inner">
            <h1>{props.title} </h1>
          </div>
        </div>
      </div>
      <div className="security">
        <div className="custom-container">
          <div className="security-heading">
            <h2>Comprehensive Security Solutions</h2>
            <h6>
              Gain access to a full spectrum of cybersecurity services through a single trusted partner. In
              addition to our expertise in testing and training, we empower clients to strengthen their
              security by integrating it into their application development processes and optimizing cloud
              protection. With our managed services, you’re safeguarded around the clock.
            </h6>
          </div>
          {/* SECURITY SOLUTIONS SECTION ENDS HERE */}
          <div className="cybersecurity_outer">
            {servicesData.map((service, index) => (
              <section key={index} className={service.sectionClass}>
                <div className="cyber-main">
                  <div className="cybersecurity-main">
                    <img src={service.mainImage} alt={service.mainImageAlt} />
                  </div>
                  <div className="cybersecurity-heading">

                    <div className="innner-icon-cyber">
                      <img src={service.icon} alt={service.iconAlt} />
                    </div>
                    <div className="cyber-text">
                      <h2>{service.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="cybersecurity-content">
                  <div className="cyber-bottom-content">
                    {service.content.map((item, idx) => (
                      <div key={idx} className="zero-trust">
                        <div className="zero-trust-img">
                          <img src={item.image} alt={item.imageAlt} />
                        </div>
                        <div className="zero-content">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cyber-bottom-text">
                  <p>{service.description}</p>
                  
                  <GetStartedBtn/>
                
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

export default Services;