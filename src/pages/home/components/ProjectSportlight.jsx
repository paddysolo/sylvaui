import { Grid } from "@mui/material";
import {ReactComponent as SportLight} from "./../../../assets/sportlight.svg";

import "./component.css"

export const ProjectSportlight = ()=>{
    return (
        <Grid container spacing={0}>
           <Grid item xs={12}>
             <div><SportLight/></div>
            </Grid>
        </Grid>
    );
}