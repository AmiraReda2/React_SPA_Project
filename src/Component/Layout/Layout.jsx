import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Information from '../Information/Information'

export default class Layout extends Component {
  render() {
    return<>

    <Navbar/>

    <Outlet/>
    
    <Information/>

    <Footer/>
    </>
  }
}
