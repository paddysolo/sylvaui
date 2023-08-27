import { Box, Container, CssBaseline } from "@mui/material"
import { Banner } from "./components/Banner"
import { CContainer } from "../../components/ui/CContainer"
import "./home.css"
import { ProjectSportlight } from "./components/ProjectSportlight"

export const Home = ()=>{
  return (
    <>
     <CssBaseline />
     <div  className="home">
        <div className="banner" style={{backgroundColor:"#FDFDFD"}}>
         <CContainer>
            <Banner/>
          </CContainer>
        </div>

        <div className="project-sportlight" style={{backgroundColor:"#fff"}}>
         <CContainer>
            <ProjectSportlight/>
          </CContainer>
        </div>

     </div>
    
    </>
  )
}