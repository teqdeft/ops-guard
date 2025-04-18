import React from 'react';
import blog1 from '../assets/images/blog-page-img-1.png';
import blog2 from '../assets/images/blog-page-img-2.png';
import blog3 from '../assets/images/blog-page-img-3.png';
import dexter from '../assets/images/dexter_icon_1.svg';
import blackarrow from '../assets/images/black_arrow.png';
import { NavLink, useNavigate } from 'react-router-dom';
import ReadArticleBtn from '../components/buttons/ReadArticleBtn';

const blogsData = [
  {
    id: 1,
    image: blog1,
    imageAlt: 'blog',
    authorIcon: dexter,
    authorIconAlt: '',
    author: 'Dexter Morgan',
    date: '17 Sep 2024',
    title: 'Bypassing Hardened Android Applications',
    blackArrow: blackarrow,
    blackArrowAlt: '',
    description:
      'Recently, we performed a penetration test on an Android application available on the Play Store. The app had good security in place to protect it from being opened and executed on a rooted app. In this blog post, Sanjay from NotSoSecure describes how he got around every necessary check to conduct API/dynamic testing on an Android application.',
  },
  {
    id: 2,
    image: blog2,
    imageAlt: 'blog',
    authorIcon: dexter,
    authorIconAlt: '',
    author: 'Mike Shinoda',
    date: '17 Sep 2024',
    title: 'Path Traversal to Remote Code Execution',
    blackArrow: blackarrow, 
    blackArrowAlt: '',
    description:
      'In this blog post, Sanjay from the NotSoSecure Training team describes an interesting project where he starts with a path traversal vulnerability, and chains multiple vulnerabilities to achieve remote code execution (RCE) in a .NET web application.',
  },
  {
    id: 3,
    image: blog3,
    imageAlt: 'blog',
    authorIcon: dexter,
    authorIconAlt: '',
    author: 'Dexter Morgan',
    date: '17 Sep 2024',
    title: 'Tool Release: Serialized Payload Generator',
    blackArrow: blackarrow, 
    description:
      'Serialization bugs have been making rounds across the internet. The exploitation of serialization bugs has grown in leaps and bounds in the last few years. We have been closely monitoring this area and addressing it in our pentests as well as our trainings. Serialization bugs have been making rounds across the internet. The exploitation of serialization bugs has grown in leaps and bounds in the last few years. We have been closely monitoring this area and addressing it in our pentests as well as our trainings.',
  },
];

const Blog = (props) => {
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate('/blog-details', { state: { blog } });
  };

  return (
    <div className="line_overlay">
      <div className="hero-wrapper about_wrapper blog_wrapper">
        <div className="custom-container">
          <div className="hero-wrapper-inner">
            <h1>{props.title} </h1>
          </div>
        </div>
      </div>

      <div className="home-service-section blog_service_section">
        <div className="custom-container">
          <div className="home-service-inner">
            <div className="home-service-heading">
              <h2>{blogsData.length} Articles</h2>
            </div>
          
            <div className="blog_select_box">
                    <div className="blog-inner-box">
                  
                          <select className='blog-select'>
              <option className='blog-select-option'>Newest First</option>
              <option className='blog-select-option'>Oldest First</option>

            </select>
                    </div>
                </div>
          </div>
          <div className="blogs_bottom_section">
            {blogsData.map((blog) => (
              <div key={blog.id} className="blogs_bottom_grid">
                <div className="blogs_grid_image">
                  <img
                    src={blog.image}
                    alt={blog.imageAlt}
                    onClick={() => handleBlogClick(blog)}
                   
                  />
                </div>
                <div className="blogs_grid_content">
                  <div onClick={() => handleBlogClick(blog)} style={{ cursor: 'pointer' }}>
                    <h6>
                      <span>
                        <img src={blog.authorIcon} alt={blog.authorIconAlt} />
                      </span>
                      {blog.author} • {blog.date}
                    </h6>
                    <h3>
                      {blog.title}{' '}
                      {blog.blackArrow && (
                        <span>
                          <img src={blog.blackArrow} alt={blog.blackArrowAlt} />
                        </span>
                      )}
                    </h3>
                    <p>{blog.description}</p>
                   <ReadArticleBtn/>
                  </div>
                </div>

              </div>
            ))}
             <div className="blog_pagination">
            <ul>
              <li className="active"><NavLink >1</NavLink></li>
              <li><NavLink >2</NavLink></li>
              <li><NavLink >3</NavLink></li>
              <li><NavLink >4</NavLink></li>
              <li><NavLink >Next</NavLink></li>
            </ul>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Blog;