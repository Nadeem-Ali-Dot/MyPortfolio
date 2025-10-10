import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home,About,Work,Contact} from "/src/components/index.js"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromChildren} from 'react-router-dom'


const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<App/>}>
           <Route path='' element={<Home/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Works' element={<Work/>}/>
           <Route path='/Contact' element={<Contact/>}/>
      </Route>
    )
  )
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )
  