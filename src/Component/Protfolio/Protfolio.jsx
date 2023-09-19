import React, { Component } from 'react'
import poert1 from "../../image/poert1.png"
import poert2 from "../../image/port2.png"
import poert3 from "../../image/port3.png"

export default class Protfolio extends Component {
  render() {
    return <>
 
 <div className="protfolio">
  <div className="container">
    <div className="row g-5 mb-5">
      <div className="col-md-12 pt-4">

        <div className="d-flex justify-content-center align-item-center flex-columu">
          <h2 className='text-uppercase fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
        </div>

           <div className="d-flex justify-content-center align-items-center">
             <div className="line-contact"></div>
             <i className='fa-solid fa-star mx-3'></i>
             <div className="line-contact"></div>
           </div>
      </div>

  <div className="col-md-4 text-center">
  <div className="position-relative">
      <img className='w-100 rounded-3' src ={poert1} alt='poert1'/>
       <div data-bs-toggle="modal" data-bs-target="#exampleModal1" className="icon-plus  position-absolute layer text-center d-flex align-items-center justify-content-center">
          <i className='fa-solid fa-plus fa-6x text-white'></i>
       </div>
  </div>
  </div>


  <div className="col-md-4 text-center">
  <div className="position-relative">
      <img className='w-100 rounded-3' src ={poert2} alt='poert2'/>
       <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className="icon-plus  position-absolute layer text-center d-flex align-items-center justify-content-center">
          <i className='fa-solid fa-plus fa-6x text-white'></i>
       </div>
  </div>
  </div>


  <div className="col-md-4 text-center">
  <div className="position-relative">
      <img className='w-100 rounded-3' src ={poert3} alt='poert3'/>
       <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className="icon-plus  position-absolute layer text-center d-flex align-items-center justify-content-center">
          <i className='fa-solid fa-plus fa-6x text-white'></i>
       </div>
  </div>
  </div>


  <div className="col-md-4 text-center">
  <div className="position-relative">
      <img className='w-100 rounded-3' src ={poert1} alt='poert1'/>
       <div  data-bs-toggle="modal" data-bs-target="#exampleModal1" className="icon-plus  position-absolute layer text-center d-flex align-items-center justify-content-center">
          <i className='fa-solid fa-plus fa-6x text-white'></i>
       </div>
  </div>
  </div>

  <div className="col-md-4 text-center">
  <div className="position-relative">
      <img className='w-100 rounded-3' src ={poert2} alt='poert2'/>
       <div  data-bs-toggle="modal" data-bs-target="#exampleModal2" className="icon-plus  position-absolute layer text-center d-flex align-items-center justify-content-center">
          <i className='fa-solid fa-plus fa-6x text-white'></i>
       </div>
  </div>
  </div>


  <div className="col-md-4 text-center">
  <div className="position-relative">
      <img className='w-100 rounded-3' src ={poert3} alt='poert3'/>
       <div  data-bs-toggle="modal" data-bs-target="#exampleModal3" className="icon-plus   position-absolute layer text-center d-flex align-items-center justify-content-center">
          <i className='fa-solid fa-plus fa-6x text-white'></i>
       </div>

     </div>
    </div>
    </div>
  </div>
 </div> 


{/*=====================================MODAL===========================================  */}

 <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-body d-flex align-items-center justify-content-center p-0">
        <img src={poert1} alt="poert1" />
      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-body d-flex align-items-center justify-content-center p-0">
        <img src={poert2} alt="poert2" />
      </div>

    </div>
  </div>
</div>


<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-body d-flex align-items-center justify-content-center p-0">
        <img src={poert3} alt="poert3" />
      </div>

    </div>
  </div>
</div>


    </>
  }
}
