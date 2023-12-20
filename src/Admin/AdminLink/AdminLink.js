import React from 'react'
import "./AdminLink.css"
import { Link } from 'react-router-dom'
const AdminLink = () => {
  return (
    <div className='mainadminlink'>
               <div className='boxadminlink'> 
                
              <h3 className="points-text"> Upload Blog</h3>
                   <div  > <Link to="/upload-blog"> <button className='go'> Go </button> </Link> </div>
              </div>

              <div className='boxadminlink'> 
                
              <h3 className="points-text"> Upload Job</h3>
                   <div  > <Link to="/admin-career"> <button className='go'> Go </button>  </Link></div>
              </div>
              <div className='boxadminlink'> 
                
                <h3 className="points-text"> View Job Data</h3>
                     <div  >  <Link to="/job"> <button className='go'> Go </button> </Link></div>
                </div>
                <div className='boxadminlink'> 
                
                <h3 className="points-text"> View Quote data</h3>
                     <div  >  <Link to="/quote"><button className='go'> Go </button> </Link></div>
                </div>
                <div className='boxadminlink'> 
                
                <h3 className="points-text"> Upload Portfolio</h3>
                     <div  >  <Link to="/upload-portfolio"><button className='go'> Go </button> </Link></div>
                </div>
                
    </div>
  )
}

export default AdminLink