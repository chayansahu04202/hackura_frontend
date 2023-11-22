import React from 'react';
import './style/Aboutpage.css';
import userimage from './images/user.jpg';
import { useSpring, animated } from 'react-spring';

const Aboutpage = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#1ebd36' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'green' },
  })
  return(
    <>
      <section className="container">
      {/* Main Container */}
      <div className="row my-5">
        <div className="row mt-5">
          <div className='col-lg-4 col-11 mx-lg-0 mx-auto my-lg-4'>
            <h1>WHAT IS <animated.span style={styles}>HACKCURA</animated.span> ?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-11 mx-auto mt-4">
            <p>Hackcura is a team of enthusiastic and passionate security testers. Which provides penetration testing services and consultancy. Our team comprises industry level well experienced security testers who are accredited by Government Of India and well recognised by various organizations. We have a security model of NGPT (Next Generation Penetration Testing), while other companies are still following the old conventional methods for Testing. Our security model not only consists of all conventional approaches but also enriched with modern methodologies that suits best for such big organizations like EaseMyTrip. Our service consist giving Security awareness sessions to the internal staff (without any charges), launching Vulnerability Disclosure program & managing it, testing all possible public facing assets of the company based on checklist and implementing iterative model for testing the product which are in its stage/dev environment (beta phase) if required or asked by the company. "The strength of the chain is decided by its weakest link" so as EasyMyTrip is having 150+ subdomains (where 88 subdomains are live), if any single subdomain is not secure, it can harm the whole company. So our approach is to find all the assets, prioritize them based on how famous or important the asset is, secure this asset and later move on to the less famous subdomains and asset while following the iterative model for the main assets. We as a company are focused on providing the best services, as minimal as possible cost with the motive of WIN-WIN situation for all, customer as well as the service provider.<br/><br/>The idea is to build trust and relationship with Indian Companies to secure the Indian Cyber Space under the name of HACKCURA (Cure for the hacks).</p>
          </div>
        </div>
      </div>
      <div className=' row my-5'>
        {/* Header */}
        <div className='row mt-5'>
          <div className='col-lg-3 col-6 ms-lg-0 ms-3'>
            <h1>THE <span style={{color: '#20C20E'}}>TEAM</span></h1>
          </div>
        </div>
        {/* First block for first founder */}
        <div className="row main_container shadow_effect my-5 mx-auto">
          <div className="col-lg-8 col-12 order-2 order-lg-1">
          <div className="my-lg-5 my-0 ps-lg-3">
              <div className="py-lg-4 py-3 text-lg-start text-center">
                <h3 className="">UDIT BHADAURIA</h3>
                <h5 style={{color:"#20C20E"}}>Founder, Hackcura</h5>
                <h6>Synack Red Team Member, Bugcrowd Ambassador</h6>
              </div>
              <p className="mb-5 pe-lg-4 pe-0">Hii ! Myself Udit Pratap Singh, I am a DIT Dehradun undergraduate with over 3 years of experience. </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 order-1 order-lg-2">
            <div className="row my-4 justify-content-center">
              <div className="col-lg-9 col-7">
                <img className="img-fluid" src={userimage} alt="user"/>
              </div>
            </div>
          </div>
        </div>
        {/* Second block  */}
        <div className="row main_container shadow_effect my-5 mx-auto">
        <div className="col-lg-4">
            <div className="row my-4 justify-content-center">
              <div className="col-lg-9 col-7">
                <img className="img-fluid" src={userimage} alt="user"/>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="my-lg-5 my-0">
              <div className="py-lg-4 py-3 text-lg-end pe-lg-4 text-center">
                <h3 className="">VIVEK YADAV</h3>
                <h5 style={{color:"#20C20E"}}>Security Engineer, Hackcura</h5>
              </div>
              <p className="mb-5 pe-lg-4 pe-0">Hackcura is a team of enthusiastic and passionate security testers.</p>
            </div>
          </div>
        </div>
        <div className="row main_container shadow_effect my-5 mx-auto">
          <div className="col-lg-8 col-12 order-2 order-lg-1">
          <div className="my-lg-5 my-0 ps-lg-3">
              <div className="py-lg-4 py-3 text-lg-start text-center">
                <h3 className="">ABHISHEK KUKRETI</h3>
                <h5 style={{color:"#20C20E"}}>Hackcura</h5>
                <h6>Cyber security specialization</h6>
              </div>
              <p className="mb-5 pe-lg-4 pe-0"></p>
            </div>
          </div>
          <div className="col-lg-4 col-12 order-1 order-lg-2">
            <div className="row my-4 justify-content-center">
              <div className="col-lg-9 col-7">
                <img className="img-fluid" src={userimage} alt="user"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
   )

 }

export default Aboutpage;