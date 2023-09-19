import React , { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Protfolio from './Component/Protfolio/Protfolio';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';




const router= createBrowserRouter([
 
  
  
  {path:'', element:<Layout/>, children:[
    {index: true, element:<Home/>},
    {path: 'home', element:<Home/>},
    {path:'about', element:<About/>},
    {path:'protfolio', element:<Protfolio/>},
    {path:'contact', element:<Contact/>},

    {path:'*', element: <div className='bg-success d-flex vh-100 justify-content-center align-items-center'>
       <h2 className='text-white fs-2'>Not Found The Page</h2>
    </div>}

  ]},


])
  

export default class App extends Component{


  render(){
    return<>
    <RouterProvider  router={ router } />
    </>
    
  }
 }
