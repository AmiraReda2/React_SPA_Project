import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return <>

    <div className="about text-white">
      <div className="container mt-5 pt-5">
        <div className="row">

          <div className="col-md-12">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
              <div className='d-flex align-items-center justify-content-center mb-3'>

                <div className="line-about"></div>
                <i className='fa-solid fa-star mx-3'></i>
                <div className="line-about"></div>
              </div>
            </div>

            <div className="row">

              <div className="col-md-6 ps-md-5 ">
                <div>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>


              <div className="col-md-6 pe-5  ">
                <div>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  }
}
