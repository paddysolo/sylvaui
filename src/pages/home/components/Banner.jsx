import { Grid } from "@mui/material";
import {ReactComponent as IntroText} from "./../../../assets/productanimateui.svg";
import arrowback from "./../../../assets/arrowbackui.svg";
import productImage from "./../../../assets/productui.gif";
import EastIcon from '@mui/icons-material/East';

import "./component.css"
import { ScrollDown } from "./ScrollDown";

export const Banner = ()=>{
    return (
        <Grid  container spacing={2}>
           <Grid item xs={6}>
              <div className="left">
                <div className="av-work">Available for work.</div>
                <div className="textContent">
                    <h1 className="intro-text">Hi, I’m Sylvanus, a</h1>
                    <IntroText/>
                    <img className="arrowBack" src={arrowback} alt="" />
                </div>
               
                <p className="invite">Interested in making delightful custom and user-friendly digital <br/> products, mobile application and motion designs.</p>
                <button className="getInBtn">Get in touch
                <EastIcon className="eastIcon"/>
                </button>
                {/* <ArrowBack/> */}
               
              </div>
            </Grid>
            <Grid item xs={6}>
             <div className="right">
                <img className="productImage" src={productImage} alt="" />
                <span  className="scrollingdown"><ScrollDown /></span>
             </div>
            </Grid>
        </Grid>
    );
}