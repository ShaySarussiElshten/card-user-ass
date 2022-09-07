import React,{useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/router'
import Context from './Context/context'
import AppContext from './interface/AppContext'
import { ProductCart } from './interface/ProductCart';
import { LOCAL_STORAGE } from './enum/localStorage';
import { getFromStaorageAndUpdateState } from './utils/utils';
import 'react-toastify/dist/ReactToastify.css';



function App() {

 

  return (

          <BrowserRouter>
               <Router /> 
         </BrowserRouter>



  );
}

export default App;
