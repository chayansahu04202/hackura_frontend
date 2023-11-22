import React from 'react';
import "./style/contactus.css";
import { Spring,animated } from 'react-spring';


const ContactUs = () => {
  return(
    <section className="container" style={{marginTop:"100px"}}>
      <div className="row">
        {/* FORM SECTION */}
        <div className="col-lg-6 col-12">
          <h1>CONTACT <span style={{color:"#20C20E"}}>US</span></h1>
          <form>
            <div className="form-floating mt-lg-5 mt-5">
              <input type="text" className="form-control input_boxes" id="floatingInput" placeholder="Name"/>
              <label htmlFor="floatingInput">Name*</label>
            </div>
            <div className="form-floating mt-lg-4 mt-3">
              <input type="email" className="form-control input_boxes" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address*</label>
            </div>
            <div className="form-floating mt-lg-4 mt-3">
              <input type="text" className="form-control input_boxes" id="floatingInput" placeholder="9140716702"/>
              <label htmlFor="floatingInput">Phone no. (with country code)</label>
            </div>
            <div className="form-floating mt-lg-4 mt-3">
              <textarea type="text" className="form-control input_boxes" id="floatingTextarea2" placeholder="text"/>
              <label htmlFor="floatingTextarea2">Query or Reason*</label>
            </div>
            <div className="text-lg-start text-center">
            <button className="btn btn-success my-lg-5 my-4">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="col-lg-2"></div>
        {/* ADDRESS SECTION */}
        <div className="col-lg-4 mt-5">
        <Spring
              from ={{ opacity:1, marginRight:-100,marginLeft:100}}
              to = {{ opacity:1,marginRight:0,marginLeft:0 }}
              config = {{delay:100,duration:500}} 
              >
              {styles => (
                <animated.div style={styles}>
                <div className=" text-center" style={{backgroundColor:"rgba(0,0,0,0.8)", height:"auto",borderRadius:"20px",color:"white"}}>
                  <h3 className="pt-2 px-5">ADDRESS</h3>
                  <p className="pt-2 px-5">B-803 Happiness Tower, Sikka karmic greens, Sector 78, NOIDA, 201305<br/>Ph : +91 120-496-5608</p>
                  <h4>OR</h4>
                  <p>Mail to : founder@hackcura.in</p>
                  <p className="pb-2">Mail to : support@hackcura.in</p>
                  <Spring
                    from={{opacity:0}}
                    to={{opacity:1}}
                    config={{delay:1000,duration:2000}}
                    >
                    {styles =>(
                      <animated.div style={styles}>
                      <p><iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.278505516095!2d77.3824974151564!3d28.561398482445913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5a2e7897db%3A0x1e681b7cd1b3619c!2sHappiness%20Tower!5e0!3m2!1sen!2sin!4v1626190907657!5m2!1sen!2sin" allowFullScreen="" loading="lazy" title="location-map"/></p>
                      </animated.div>
                    )}
                 
                  </Spring>
                </div>
                </animated.div>

              )}   
              </Spring>
        
          {/* MAP COMPONENT */}

        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-8 col-10 bg-danger text-white mx-auto mt-2" style={{borderRadius:"20px"}}>
          <h3 className="text-center py-4">HACKCURA VULNERABILITY DISCLOSURE PROGRAM</h3>
          <p className="text-center">If you come accross any security vulnerabilities (Critical, High, Medium or Low) in any of the asset of Hackcura, Please feel free to report it on<br/><span style={{fontWeight:'600'}}>Mail to : support@hackcura.in</span><br/>And claim Hackcura swag of Tshit or sticker on every unique vulnerability reported.</p>
        </div>
      </div>
    </section>
   )

 }

export default ContactUs