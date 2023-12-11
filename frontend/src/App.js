import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import { Welcome } from './Welcome'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Login />}></Route>
            <Route path='/signup' element = {<Signup />}></Route>
            <Route path='/welcome' element = {<Welcome />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
