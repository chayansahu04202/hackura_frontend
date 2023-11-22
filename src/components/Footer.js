import React from 'react'
import './style/Footer.css';
import image_footer from './images/footerimg.png';
import { FaInstagramSquare,FaRegCopyright,FaTwitterSquare ,FaFacebookSquare,FaMedium,FaYoutube,FaLinkedin,FaGithubSquare} from "react-icons/fa";
import { useState } from 'react';

const Footer = () => {
    const [usermail,addUserMail] = useState();
    const enteringMail = (val) => {
        const email = val.target.value;
        addUserMail(email);

    }
    

    const nlSubscribed=(e)=>{
        e.preventDefault();
        alert(usermail);
    }
  return(
    <div className="container-fluid background">
        <div className="row ">
            <div className="col-lg-4 col-12 mx-auto text-lg-start text-center">
                <div className="my-5 mx-lg-3">
                    <h2 style={{color:"#ffffff"}}>Follow <span style={{color:"#20C20E"}}> Us</span></h2>
                    <p style={{color:'white'}}>Hackcura Private limited<br/>New Delhi, 110005 </p>
                    <h4>
                        <a className="ms-0 icons" href="https://www.facebook.com/Hackcura/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                        <a className="ms-3 icons" href="https://github.com/hackcura" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
                        <a className="ms-3 icons" href="https://twitter.com/hackcura" rel="noopener noreferrer" target="_blank"><FaTwitterSquare/></a>
                        <a className="ms-3 icons" href="https://www.youtube.com/channel/UCVm2UboG1L6x3MiCcEW4KfA" rel="noopener noreferrer" target="_blank"><FaYoutube/></a>
                        <a className="ms-3 icons" href="https://www.instagram.com/hackcura_/" rel="noopener noreferrer" target="_blank"><FaInstagramSquare/></a>
                        <a className="ms-3 icons" href="https://medium.com/hackcura" rel="noopener noreferrer" target="_blank"><FaMedium/></a>
                        <a className="ms-3 icons" href="https://www.linkedin.com/company/hackcura" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a>
                    </h4>

                </div>
            </div>
            <div className="col-lg-4">
                <h4 className="mt-lg-5 text-center" style={{color:"white"}}>Subscribe to our Newsletter</h4>
                <form className="text-center mt-lg-3" onSubmit={nlSubscribed}> 
                    <input className="input_field text-center" type="text" placeholder="Enter your Email" value={usermail} onChange={enteringMail} style={{width:"60%"}}/><br/>
                    <button className="btn_submit mt-3" type="submit">Send</button>
                </form>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
                <div className="my-5 text-end m" >
                    <img className="img-responsive" src={image_footer} alt="footer"></img>
                </div>
            </div>
        </div>
        <div className ='row justify-content-center mt-lg-0 mt-3'>
            <p className ="copyr"><FaRegCopyright/> Copyright 2023, Hackcura Pvt ltd.</p>
        </div>
    </div>
   )

 }

export default Footer