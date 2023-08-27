import { Box, Container, CssBaseline } from "@mui/material"
import { Banner } from "./components/Banner"
import { CContainer } from "../../components/ui/CContainer"
import "./home.css"

export const Home = ()=>{
  return (
    <>
     <CssBaseline />
     <div  className="home">
        <div className="banner">
         <CContainer>
            <Banner/>
          </CContainer>
        </div>

     </div>
    
    </>
  )
}