import { createBrowserRouter } from "react-router-dom";
import Layout from './../components/layouts/index';

import {Home} from "./../pages/index"
import { About } from "../pages/about/About";


export const baseRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children : [
            {
                index:true,
                element: <Home />
            },
            {
                path:"about",
                element: <About/>
            }
        ]
    }
])