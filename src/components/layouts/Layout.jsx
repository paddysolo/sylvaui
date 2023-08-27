import { Outlet } from "react-router-dom"
import {Footer} from "./footer/Footer"
import {Header} from "./header/Header"

export const Layout = ()=>{
    return (
      <div className="container">
        <div className="tpc"></div>
        <div className="tpd">
          <div className="wrapper">
            <Header/>
              <Outlet/>
            <Footer/>
          </div>
        </div>
      </div>
    )
}