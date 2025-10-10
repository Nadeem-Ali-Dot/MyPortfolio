import React from "react"
import {Header ,HeaderSm} from "/src/components/index.js"
import { Outlet } from "react-router-dom"


function App() {

  return (
   <div className="container-fluid p-4 container-lg">
      <div id="header-lg">
          <Header/>
      </div>
      <div id="header-sm">
          <HeaderSm/>
      </div>
           <Outlet/>
        </div>


  )
}

export default App
