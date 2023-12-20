import React from 'react'
import { Hero } from '../../Components/Hero/Hero'
import WhyUs from '../../Components/WhyUs/WhyUs'
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent'
import Testimonials from '../../Components/Testimonials/Testimonials'
import { Techno } from '../../Components/Technology/Techno'
import { GetQuoteForm } from '../../Components/ContactUs/GetQuoteForm'
import Card from '../../Components/Card/Card'
import { Helmet } from 'react-helmet';
export const Home = () => {
  return (
    <div>
 <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <meta name="description" content="Creating innovative and state-of-the-art goods and services that transform the digital market is our mission at Code Breakers Infotech. Delivering the best possible work is our main objective, as it should motivate our clients to choose us as their go-to web development partner.

" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>

        <Hero/>
        <WhyUs/>
        <ServicesComponent/>
        <Techno/>


        <Card/>
        <GetQuoteForm/>

    </div>
  )
}
