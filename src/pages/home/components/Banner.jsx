import { Grid } from "@mui/material";
import {ReactComponent as IntroText} from "./../../../assets/productanimateui.svg";
import productImage from "./../../../assets/leftproduct.png";
import EastIcon from '@mui/icons-material/East';

import "./component.css"

export const Banner = ()=>{
    return (
        <Grid  container spacing={2}>
           <Grid item xs={6}>
              <div className="left">
                <div className="av-work">Available for work.</div>
                <h1 className="intro-text">Hi, I’m Sylvanus, a</h1>
                <IntroText/>
                <p className="invite">Interested in making delightful custom and user-friendly digital <br/> products, mobile application and motion designs.</p>
                <button className="getInBtn">Get in touch
                <EastIcon className="eastIcon"/>
                </button>
              </div>
            </Grid>
            <Grid item xs={6}>
             <div className="right">
                <img className="productImage" src={productImage} alt="" />
             </div>
            </Grid>
        </Grid>
    );
}