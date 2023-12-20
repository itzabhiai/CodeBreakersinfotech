import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {  textdb } from '../.././firebaeConfig';
import {  collection, getDocs,  } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import "./DPortfolio.css"
import { Helmet } from 'react-helmet';
export const DisplayPortfolio = () => {
    const [portfolio, loading, error] = useCollection(collection(textdb, 'portfolio'));



    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(textdb, 'portfolio'));
            querySnapshot.forEach((doc) => {
              console.log(doc.id, ' => ', doc.data());
            });
          } catch (error) {
            console.error('Error fetching portfolio:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div className='main-display-portfoliio'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
                <meta name="description" content="Welcome to our vibrant portfolio, a space where our journey unfolds through creativity, innovation, and dedication. Here, we showcase the culmination of our passion and expertise, offering a glimpse into our world of dynamic projects and remarkable accomplishments. Each entry reflects our commitment to excellence, our drive for innovation, and our unwavering pursuit of turning ideas into impactful realities. Explore our portfolio and witness the stories of our endeavors, crafted with enthusiasm and a relentless pursuit of greatness." />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
        <div data-aos="fade-up" className='wearehiring'>
        <h2 > Welcome To Our <span className='hiring'>Portfolio</span></h2>
        <p >Welcome to our vibrant portfolio, a space where our journey unfolds through creativity, innovation, and dedication. Here, we showcase the culmination of our passion and expertise, offering a glimpse into our world of dynamic projects and remarkable accomplishments. Each entry reflects our commitment to excellence, our drive for innovation, and our unwavering pursuit of turning ideas into impactful realities. Explore our portfolio and witness the stories of our endeavors, crafted with enthusiasm and a relentless pursuit of greatness.</p>
      </div>

        <div className='display-portfolio-background' >
      
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching portfolio</p>}
      {portfolio && (
        <div className='display-portfoliio'>
          {portfolio.docs.map((portfolio) => {
            const data = portfolio.data();
            return (
              
                <div data-aos="fade-up" className='portfolio-Card' key={portfolio.id} >
              <Link  to={data.p1} style={{ textDecoration: 'none' }}> <img src={data.imageUrl} alt={data.title} style={{ maxWidth: '100%' }} />
                <p className='time'> {data.timestamp && data.timestamp.toDate().toLocaleString()}</p>
                <h3 className='btitle'>{data.title}</h3>
                
                </Link> 
             
              </div>  
            );
          })}
        </div>
      )}
        </div>
    </div>
  )
}
