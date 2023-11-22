import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Homepage.css';
import image1 from './images/PT.png';
import image2 from './images/MPT.png';
import image3 from './images/API.png';
import image4 from './images/CLD.png';
import image7 from './images/SRF.png';
import image5 from './images/THK.png';
import image6 from './images/SCR.png';
import image8 from './images/NPT.jpg';
import rimage from './images/rotate.png';
import { useSpring,animated } from 'react-spring'
import { Spring } from 'react-spring';
import vid from './images/Line1.mp4';

import Typewriter from "typewriter-effect";





const data = [{image:image1,title:"WEB APPLICATION PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image2,title:"MOBILE APPLICATION PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image3,title:"API PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image8,title:"NETWORK PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image4,title:"SERVER AND CLOUD SECURITY AUDITS",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image5,title:"THICK CLIENT APPLICATION PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image6,title:"SOURCE CODE REVIEW",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image7,title:"AUDITS OF SWITCHES ,ROUTERS AND FIREWALL RULES",about:"Some quick example text to build on the card title and make up the bulk of the card's content."}
            
            ]



const Homepage = (props) => {
    const styles = useSpring({
      loop: false,
      from: { rotateZ: 180 },
      to: { rotateZ: 360 },
    })
    const styles1 = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#1ebd36' },
        { opacity: 0, color: 'rgb(14,26,19)'},
      ],
      from: { opacity: 0, color: 'green' },
    })
  return(
    <div className="home">
    
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <video className="videos" autoPlay = "autoplay" muted loop = "loop" id="myVideo">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        
      </div>
      
      <div className="row heading_top">
        <div className=" col-lg-7 col-12 heading_top_container text-light mx-auto text-center">
          {/* <h1 className="Main_heading">HACKCURA</h1> */}
          <Spring
              from ={{ opacity:0, marginTop:-300}}
              to = {{ opacity:1,marginTop:40 }}
              config = {{delay:100,duration:1000}} 
              >
              {styles => (
                <animated.div style={styles}>
                <h1 className="Main_heading">HACKCURA</h1>
                </animated.div>

              )}   
              </Spring>
          
          <p className="Main_tagline my-3">
          <Typewriter 
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit ={(typewriter)=>{
              typewriter.typeString("“Hackcura has the vision of empowering people with a secure cyber world”").pauseFor(1500).deleteAll().pauseFor(1000).start()
            }}
          /></p>
          <NavLink className="contact_button" to="/contactus"> Contact Us</NavLink>
        </div>
        
      </div>
    </section>

    <section className="container my-5">
    <div className="row my-5 py-5">
      <div className="col-lg-6 col-10 mx-auto text-center">
        <animated.h2 style={styles1}>Who we are ?</animated.h2>
        <p>We are a Cyber Security Organization
            providing end-to-end security solutions and
            consultancy. We provide high end security
            services in Vulnerability Assessment and
            Penetration Testing.</p>
      </div>
      <div className="col-lg-4 col-7 my-lg-0 my-4 mx-lg-0 mx-auto">
        <animated.img
          src = {rimage}
          alt = "RotatingImage"
          style = {{ width:"200px",...styles,}}
        />
      </div>
    </div>
    </section>
   

    <section className="container">
      <div className="row my-4">
        <div className="col-lg-4 col-12">
          <h1 className="ms-3 ms-lg-0">OUR <span style= {{color:"#20C20E"}}>SERVICES</span></h1>
        </div>
      </div>
      <div className="row">
      { data.map((val,index)=>{
        return(
          <div className="col-lg-3 col-6 mx-lg-auto mx-0 shadow_effect my-lg-3 my-1" key={index}>
            <div className="card card_item py-3 my-lg-4 my-2 mx-lg-2 mx-0">
              <img src={val.image} className="card-img-top mx-auto" alt="Card1" style={{width:"100px"}}/>
              <div className="card-body text-center">
                <h6 className="card-title" style={{color:"#20C20E",fontWeight:"500"}}>{val.title}</h6>
                <p className="card-text d-lg-block d-none">{val.about}</p>
              </div>
            </div>
          </div>

        )
      })}        
      </div>
      <div className="row my-5">
        <div className="col-lg-4 col-12">
          <h1 className="ms-3 ms-lg-0">OTHER <span style= {{color:"#20C20E"}}>SERVICES</span></h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-10 mx-auto ">
          <div className = "row ">
            <div className="col-lg-8 mx-auto">
              <h2> CORPORATE TRAINING </h2>
            </div>
          </div>
          <div className = "row my-3">
            <div className="col-lg-8 mx-auto">
              <ul className="Unordered_list">
                <li className = "py-1">VAPT</li>
                <li className = "py-1">Secure Code Review</li>
                <li className = "py-1">Security Awareness</li>
                <li className = "py-1">Infra/Host Penetration Testing</li>
                <li className = "py-1">Auditing (Firewall Rules & Cloud Infra)</li>
                <li className = "py-1">Mobile Application</li>
                <ol>
                  <li className = "py-1">Android (Static and Dynamic)</li>
                  <li className = "py-1">ios (Static and Dynamic)</li>
                </ol>
                <li className = "py-1">API Penetration Testing</li>
                <li className = "py-1">Industry Standard tools like Burp, Nessus, Acunetix etc</li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-10 mx-auto">
          <div className = "row">
            <div className="col-lg-8 mx-auto">
              <h3> WEBINAR, SEMINAR, WORKSHOP & TRAINING </h3>
            </div>
          </div>
          <div className = "row my-3">
            <div className="col-lg-8 mx-auto">
              <ul className="Unordered_list">
                <li className = "py-1">VAPT</li>
                <li className = "py-1">Secure Code Review</li>
                <li className = "py-1">Security Awareness</li>
                <li className = "py-1">Infra/Host Penetration Testing</li>
                <li className = "py-1">Auditing (Firewall Rules & Cloud Infra)</li>
                <li className = "py-1">Mobile Application</li>
                <ol>
                  <li className = "py-1">Android (Static and Dynamic)</li>
                  <li className = "py-1">ios (Static and Dynamic)</li>
                </ol>
                <li className = "py-1">API Penetration Testing</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
   )

 }

export default Homepage;