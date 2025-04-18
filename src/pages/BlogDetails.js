import React from 'react';
import dextericon from "../assets/images/dexter_icon_1.svg";
import arrowBack from "../assets/images/arrow_back_ios.png";
import articleMain from "../assets/images/article-main.png";
import backgroundArticle from "../assets/images/back-ground-article.png";
import machinekeyImg from "../assets/images/machinekey.png";
import authorImg from "../assets/images/author.png";
import linkedinImg from "../assets/images/linkdeen.png";
import firefoxImg from "../assets/images/firefox.png";
import twitterImg from "../assets/images/twitter.png";
import facebookImg from "../assets/images/facebook.png";
import arrowLeft from "../assets/images/arrow_left.png";
import arrowRight from "../assets/images/arrow-right.png";
import {NavLink} from 'react-router-dom'

const BlogDetails = (props) => {
  return (
    <>
      {/* LINE_OVERLAY_COMPONENTS_START_HERE */}
      <div className="line_overlay">
        {/* BANNER-COMPONENT-START-HERE */}
        <div className="hero-wrapper about_wrapper blog_detail_banner">
          <div className="custom-container">
            <div className="hero-wrapper-inner">
              <NavLink to="/blog"><img src={arrowBack} alt="" /></NavLink>
              <h1>{props.title} </h1>
            </div>
          </div>
        </div>
        {/* BANNER-COMPONENT-END-HERE */}
        {/* REMOTE CODE SECTION STARTS HERE */}
        <section className="remote-code">
          <div className="custom-container">
            <div className="dexter-morgain-main">
              <div className="dexter-morgan-inner-image">
                <img src={articleMain} alt="" />
              </div>
              <div className="remote-main">
                <div className="inner-remote-code">
                  <div className="remote-img">
                    <img src={dextericon} alt="" />
                  </div>
                  <div className="remote-code-heading">
                    <p>Dexter Morgan • 17 Sep 2024</p>
                  </div>
                </div>
                <div className="blog-content">
                  <p>In this blog post, Sanjay from the NotSoSecure Training team describes an interesting project
                    where he starts with a path traversal vulnerability, and chains multiple vulnerabilities to
                    achieve remote code execution (RCE) in a .NET web application.</p>
                </div>
              </div>
              <div className="important-ideas-main">
                <div className="important-heading">
                  <h5>In this post, we cover the following important ideas</h5>
                </div>
                <div className="ideas">
                  <ul>
                    <li><a href="#">Use of Path Traversal vulnerability to read web.config file</a></li>
                    <li><a href="#">Use of the MachineKey obtained from web.config</a></li>
                    <li><a href="#">The concept that there can be multiple nested .NET applications, each with
                      its own web.config file</a></li>
                    <li><a href="#">Exploiting ViewState Deserialization vulnerability to achieve RCE</a></li>
                    <li><a href="#">Use of DNS queries to exfiltrate the results of RCE</a></li>
                  </ul>
                </div>
                <div className="idea-bottom">
                  <p>While the first four ideas are applicable specifically to .NET applications, the use of DNS
                    queries for exfiltration applies to any web application.</p>
                </div>
                <div className="background-article-main">
                  <div className="background-article-heading">
                    <h5>Background:</h5>
                  </div>
                  <div className="background-innner-text">
                    <p>The team at NotSoSecure Training was recently engaged in a web application penetration
                      test. We were provided with a single in-scope URL and credentials to access the target
                      application as one single user.</p><br />
                    <p> Based on the initial recon, we identified that this was a .NET application. Our readers
                      will already be aware that the configuration information for .NET applications is
                      usually stored in the web.config file. Often a lot of useful information can be obtained
                      if we are able to access this file.</p><br />
                    <p> We start our story when we have already identified a GET parameter (“f” - shown in the
                      screenshot below) that was vulnerable to Path Traversal. This allows us to access files
                      stored as a part of the web application.</p><br />
                    <p> This being a .NET application, we exploited this vulnerability to extract the contents
                      of the web.config file. However, this file did not contain any sensitive information
                      that we could use in further exploitation. It did not contain any MachineKey information
                      either. This meant our target application used the default MachineKey generated based on
                      System configuration and hence it was not available in web.config file.</p>
                  </div>
                </div>
                <div className="background-inner-img">
                  <img src={backgroundArticle} alt="" />
                </div>
                <div className="machinekey-main">
                  <div className="machinekey-heading">
                    <h5>MachineKey, ViewState and RCE:</h5>
                  </div>
                  <div className="machinekey-contant">
                    <p>Now, there is the concept of MachineKey in .NET which has information about encryption
                      and decryption of .NET component like, OwinCookie, ASPXAUTH cookie, ViewState and many
                      more.</p><br />
                    <p>Reference <a
                      href="https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/w8h3skw9(v=vs.100)">
                      https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/w8h3skw9(v=vs.100)</a>
                    </p> <br />
                    <p>When a .NET application uses the ViewState functionality, the MachineKey becomes very
                      useful to obtain remote code execution (RCE) on the application server. Therefore when
                      testing a .NET application, a pentester should try:</p><br />
                    <p>1. Check whether the application uses ViewState <br />
                      2. If Yes, then look for MachineKey used to encrypt the ViewState</p><br />
                    <p>We used the BurpSuite search feature to find "ViewState" keyword and found a request
                      which has ViewState. The path shown is "/legacy/ias/.aspx"</p>
                  </div>
                </div>
                <div className="machinekey-bottom-img">
                  <img src={machinekeyImg} alt="" />
                </div>
              </div>
              <div className="about-author-main">
                <div className="author-img">
                  <img src={authorImg} alt="" />
                </div>
                <div className="author-right-content">
                  <a href="#">About the author</a>
                  <h5>Dexter Morgan</h5>
                  <h6>Security Engineer at Global Enterprise</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id odio vitae sapien interdum
                    posuere. Aenean convallis lectus sit amet metus ultricies, eu commodo nisl cursus.
                    Vestibulum in sapien orci. Quisque finibus libero nisi, eget porttitor ipsum euismod sed.
                    Nunc facilisis sem a vestibulum dignissim. Nullam fermentum elementum ex, sit amet rutrum
                    purus vestibulum nec.</p>
                </div>
              </div>
              <div className="article-share-main">
                <div className="article-heading">
                  <p>Share this Article:</p>
                </div>
                <div className="article-bottom-imgs">
                  <div className="art-share">
                    <a href="javascript:void(0)">
                      <img src={linkedinImg} alt="" />
                    </a>
                  </div>
                  <div className="art-share">
                    <a href="javascript:void(0)">
                      <img src={firefoxImg} alt="" />
                    </a>
                  </div>
                  <div className="art-share">
                    <a href="javascript:void(0)">
                      <img src={twitterImg} alt="" />
                    </a>
                  </div>
                  <div className="art-share">
                    <a href="javascript:void(0)">
                      <img src={facebookImg} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="articles-buttons">
                <div className="article-left">
                  <a href="" className="theme-outline-button black-btn"><span><img src={arrowLeft} alt="" /></span>Bypassing Hardened Android Applications</a>
                </div>
                <div className="article-right">
                  <a href="" className="theme-outline-button black-btn right">Tool Release: Serialized Payload Generator <span><img src={arrowRight} alt="" /></span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
     
      </div>
    </>
  );
};

export default BlogDetails;
