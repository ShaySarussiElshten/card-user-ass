import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { ROUTES } from '../enum/urls'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'



const Router = () => {
  
  return (
    <Routes>
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
    </Routes>
  )
}

export default Router