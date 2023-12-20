import './App.css';
import { Hero } from './Components/Hero/Hero';
import Navbar from './Components/Navbaar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Admin } from './Admin/Admin';
import { BlogDetails } from './Components/Blog/BlogDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Loder } from './Components/Loder/Loder';
import { DisplayQuote } from './Components/ContactUs/DisplayQuote';
import { GetQuoteForm } from './Components/ContactUs/GetQuoteForm';
import { DisplayBlog } from './Components/Blog/DisplayBlog';
import { UploadBlog } from './Components/Blog/UploadBlog';
import Footer from './Components/Footer/Footer';
import { Service } from './Components/Service/Service';
import { Career } from './Components/Career/Career';
import { DisplayCareer } from './Components/Career/DisplayCareer';
import { Job } from './Components/Career/Job';
import ApplyModal from './Components/Career/ApplyModal';
import { Portfolio } from './Components/Porfolio/Portfolio';
import { DisplayPortfolio } from './Components/Porfolio/DisplayPortfolio';
import { WebDevlopment } from './Components/Service/WebDevlopment';
import { Simpl } from './Pages/Home/Simpl';
import { AppDevelopment } from './Components/Service/AppDevelopment';
import { SoftwareDevelopment } from './Components/Service/SoftwareDevelopment';
import { ApplicationServices } from './Components/Service/ApplicationServices';
import Android from './Components/Service/Android';
import IosDevelopment from './Components/Service/IosDevelopment';
import UIDesign from './Components/Service/UIDesign';
import DigitalMarketing from './Components/Service/DigitalMarketing';
import TestingQA from './Components/Service/TestingQA';
import OTTApps from './Components/Service/OTTApps';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease',
    });
    AOS.refresh();

    fetchData(); // Call the fetchData function on component mount
  }, []);

  const fetchData = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual API call

      // Update loading state when data is ready
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // In case of an error, also set loading to false
    }
  };

  return (
    <div className="App">
      <ToastContainer/>
      {loading ? (
        <Loder/>
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
            <Route exact path="/quote" element={<DisplayQuote />} />
            
            <Route exact path="/blog" element={<DisplayBlog />} />
            <Route exact path="/upload-blog" element={<UploadBlog />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/admin-career" element={<Career />} />
            <Route exact path="/career" element={<DisplayCareer />} />
            <Route exact path="/job" element={<Job />} />
            
            <Route exact path="/upload-portfolio" element={<Portfolio />} />
            <Route exact path="/portfolio" element={<DisplayPortfolio />} />
            <Route exact path="/contact-us" element={<GetQuoteForm />} />
            <Route exact path="/web" element={<WebDevlopment />} />
            <Route exact path="/*" element={<Simpl />} />
            <Route exact path="/app-devlopment" element={<AppDevelopment />} />
            <Route exact path="/software" element={<SoftwareDevelopment />} />
            <Route exact path="/application-services" element={<ApplicationServices />} />
            <Route exact path="/android-app" element={<Android />} />

            <Route exact path="/ios-app" element={<IosDevelopment />} />
            <Route exact path="/ui-desgin" element={<UIDesign />} />
            <Route exact path="/digital-marketing" element={<DigitalMarketing />} />
            <Route exact path="/testing" element={<TestingQA/>} />
            <Route exact path="/ottapp" element={<OTTApps/>} />












            














          </Routes>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
