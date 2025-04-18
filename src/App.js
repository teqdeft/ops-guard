import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home title="Cutting-Edge Cybersecurity Insights and Solutions for Modern Businesses" />} />
        <Route path="/blog" element={<Blog title="Blog & Resources" />} />
        <Route path="/blog-details" element={<BlogDetails title="Path Traversal to Remote Code Execution" />} />
        <Route path="/contact" element={<Contact title="Contact us" />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/services" element={<Services title="Services" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
