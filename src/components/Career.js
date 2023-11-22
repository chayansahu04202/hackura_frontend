import React from 'react';
import './style/Career.css';
import { BiSearchAlt } from "react-icons/bi";
import { VscSymbolKeyword } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import { NavLink } from 'react-router-dom';


// sample data for jobs:
let sampleAPI = [{jType: "Internship",jTitle:"React Developer",jReq:["0-1 years of experience","Motivated","Smart Working","Comfortable with the API integration"],jPosted:3},
                 {jType: "FTE",jTitle:"Blockchain Developer",jReq:["2-3 years of experience","Motivated","Smart Working"," Comfortable with 5 days a week work"],jPosted:5},
                 {jType: "FTE",jTitle:"React Developer",jReq:["5+ years of experience","Motivated","Smart Working","Leadership skills"],jPosted:7},
                 {jType: "Internship",jTitle:"Cybersecurity",jReq:["0-1 years of experience","Motivated","Smart Working","Believes to work with team"],jPosted:10}]


const Career = () => {
  return(
    <section className="container" style={{marginTop:"100px"}}>
        <div className="row">
            <div className="col-lg-5">
                <h1>WE'RE <span style={{color:"#20C20E"}}>HIRING</span></h1>
            </div>
        </div>
        <div className="row my-4">
            <form className="d-lg-flex text-center">
                <div className="input-group">
                    <span className="input-group-text">Keyword<VscSymbolKeyword className="ms-1" style={{color:"#20C20E"}}/></span>
                    <input type="text" aria-label="First name" className="form-control text-center" placeholder="Intern, Content writer etc"/>
                </div>
                <div className="input-group ms-lg-5 mt-lg-0 mt-3">
                    <span className="input-group-text">Location <GoLocation className="ms-1" style={{color:"#20C20E"}}/></span>
                    <input type="text" aria-label="First name" className="form-control text-center" placeholder="Remote, New Delhi, Noida etc"/>
                </div> 
                <button className="btn btn-success ms-lg-2 mt-2 mt-lg-0 ps-4 pe-4"><BiSearchAlt/></button>
            </form>
        </div>
        <div className="row">
            { sampleAPI.map((val,index)=>{
                return(
                <div className="col-lg-3 col-10 mx-auto my-lg-4 my-3" key={index}>
                <div className="card text-center">
                    <div className="card-header">
                        {val.jType}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{val.jTitle}</h5>
                        <div className="card-text my-4">
                            {val.jReq.map((reqs,ind)=>{
                                return(
                                    <p key={ind}>{reqs}</p>
                                )
                            })} 
                        </div>
                        <NavLink to="/contactus" className="btn btn-success">Go somewhere</NavLink>
                    </div>
                    <div className="card-footer text-muted">
                        {`${val.jPosted} days`}
                    </div>
                </div>
            </div> 

            )})}

               
        </div>
    
        
    </section>
   )

 }

export default Career;