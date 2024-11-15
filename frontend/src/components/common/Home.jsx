import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Contact123.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'
import './homee.css';





const Home = () => {
   
   return (
      <>
         <Navbar bg="" variant="" id='abc'>
            <Container>
               <Navbar.Brand> <div id='logoo'></div>SamadhanZone</Navbar.Brand>
               <ul className="navbar-nav" id='navAllItem'>
                  <li className="nav-item mb-2" id='homenav'>
                     <Link to={'/'}
                        className={`nav-link text-light `}
                     >
                        Home
                     </Link>
                  </li>
                  {/* <li className="nav-item mb-2">
                     <Link
                        to={'/About'}
                        className={`nav-link text-light `}
                     >
                        About
                     </Link>
                  </li> */}
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-light `}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-light `}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <Container className='home-container' id='containerr'>
            <div className="left-side">
               <img src={Image1} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'>Empower Your Team,</span><br />
                  <span className='s-letter'> Exceed Customer Expectations: Discover our</span> <br />
                  <span className='t-letter'>Complaint Management Solution</span><br />
                  <Link to={'/Login'}><Button className='mt-3 register'>Register your Compliant</Button></Link>
               </p>
      <div id="rateingg">
         
         <div className="containerr" >
         
            <div className="counters" id='one'>
               <div className="counter-wrapper">
                  <div id='reviewicon'></div>
                  <div className="counter-info">
                   <h1 className='counter' data-count='100'>299+</h1>
                   <p>Customer Review</p>
                  </div>
               </div>
            </div>

            <div className="counters" id='two'>
               <div className="counter-wrapper">
                  <div id='sitevisit'></div>
                  <div className="counter-info">
                   <h1 className='counter' data-count='100'>999+</h1>
                   <p>Site Visit</p>
                  </div>
               </div>
            </div>


            <div className="counters" id='threee'>
               <div className="counter-wrapper">
                  <div id='Totalcom'></div>
                  <div className="counter-info">
                   <h1 className='counter' data-count='500'>450+</h1>
                   <p>Total Complaint Solve</p>
                  </div>
               </div>
            </div>
         </div>
         </div>
            </div>
            

          
            
         </Container>

   
         <Footer/>

         
      </>
   )
}

export default Home
