import React, { Component } from 'react'


export default class Information extends Component {
  render() {
    return <>
    <div className='infotmation '> 
    <div className="container ">
        <div className="row text-white  py-5">

            <div className="col-md-4 py-5 text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 py-5 text-center">
              <h3 className='fs-3'>AROUND THE WEB</h3>
              <div className="icons ">
              <i className=" icon fa-brands fa-facebook fs-5 mx-1  "></i>
              <i className=" icon fa-brands fa-twitter fs-5 mx-1 "></i>
              <i className=" icon fa-brands fa-linkedin fs-5 mx-1 "></i>
              <i className=" icon fa-solid fa-globe fs-5 mx-1 "></i>

              </div>
            </div>

            <div className="col-md-4 py-5 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Amira Reda</p>
            </div>


        </div>
    </div>
    </div>
    
    
    </>
  }
}
