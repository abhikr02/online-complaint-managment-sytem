import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image1 from "../../Images/Contact123.png";
// import abhi from "../../Images/abhi.jpg"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "./FooterC";
import "./homee.css";

const Home = () => {
  return (
    <>
      <Navbar bg="" variant="" id="abc">
        <Container>
          <Navbar.Brand>
            {" "}
            <div id="logoo"></div>SamadhanZone
          </Navbar.Brand>
          <ul className="navbar-nav" id="navAllItem">
            <li className="nav-item mb-2" id="homenav">
              <Link to={"/"} className={`nav-link text-light `}>
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
              <Link to={"/signup"} className={`nav-link text-light `}>
                SignUp
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/login"} className={`nav-link text-light `}>
                Login
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>
      <Container className="home-container" id="containerr">
        <div className="left-side">
          <img src={Image1} alt="" />
        </div>
        <div className="right-side">
          <p>
            <span className="f-letter">Empower Your Team,</span>
            <br />
            <span className="s-letter">
              {" "}
              Exceed Customer Expectations: Discover our
            </span>{" "}
            <br />
            <span className="t-letter">Complaint Management Solution</span>
            <br />
            <Link to={"/Login"}>
              <Button className="mt-3 register">Register your Compliant</Button>
            </Link>
          </p>
          <div id="rateingg">
            <div className="containerr">
              <div className="counters" id="one">
                <div className="counter-wrapper">
                  <div id="reviewicon"></div>
                  <div className="counter-info">
                    <h1 className="counter" data-count="100">
                      299+
                    </h1>
                    <p>Customer Review</p>
                  </div>
                </div>
              </div>

              <div className="counters" id="two">
                <div className="counter-wrapper">
                  <div id="sitevisit"></div>
                  <div className="counter-info">
                    <h1 className="counter" data-count="100">
                      999+
                    </h1>
                    <p>Site Visit</p>
                  </div>
                </div>
              </div>

              <div className="counters" id="threee">
                <div className="counter-wrapper">
                  <div id="Totalcom"></div>
                  <div className="counter-info">
                    <h1 className="counter" data-count="500">
                      450+
                    </h1>
                    <p>Total Complaint Solve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <h1 class="team">Our Team</h1>
      {/* //animated thing */}
      <div className="animated-thing">
        
        <div class="card">
          <div class="boxshadow"></div>
          <div class="main">
            <div class="top"></div>
            <div class="left side"></div>
            <div class="right side"></div>
            <div class="title" id="firstImage">
            </div>
            <div class="button-container">
            
              <button class="button">
              <a href="https://instagram.com/im_snoah/" target="blank">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                </a>
              </button>
              
              <button class="button">
                <svg
                  class="svg twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="red"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </button>
              
              <button class="button">
              <a href="https://github.com/SheikhNoor" target="blank">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                </a>
              </button>
              
            </div>
          </div>
        </div>

        <div class="card">
          <div class="boxshadow"></div>
          <div class="main">
            <div class="top"></div>
            <div class="left side"></div>
            <div class="right side"></div>
            <div class="title" id="secondImage">
            </div>
            <div class="button-container">
              <button class="button">
              <a href="https://www.instagram.com/this___is___abhi/" target="blank">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                </a>
              </button>
              <button class="button">
                <svg
                  class="svg twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="red"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </button>
              <button class="button">
              <a href="https://github.com/abhikr02" target="black">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                </a>
              </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="boxshadow"></div>
          <div class="main">
            <div class="top"></div>
            <div class="left side"></div>
            <div class="right side"></div>
            <div class="title" id="thirdImage"></div>
            <div class="button-container">
              <button class="button">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </button>
              <button class="button">
                <svg
                  class="svg twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="red"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </button>
              <button class="button">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="boxshadow"></div>
          <div class="main">
            <div class="top"></div>
            <div class="left side"></div>
            <div class="right side"></div>
            <div class="title" id="forthImage"></div>
            <div class="button-container">
              <button class="button">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="red"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </button>
              <button class="button">
                <svg
                  class="svg twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="red"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </button>
              <button class="button">
                <svg
                  class="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
