import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Properties from "../Properties/Properties";
import Homepage from "../HomePage/HomePage";
import SingleProperty from "../../Components/SingleProperty/SingleProperty";
const routes= [
    {
        path:"/",
        element:<App />,
        children: [
            {
                path: "/",
                element:<Homepage />
            },
            {
                path:"/properties",
                element:<Properties />
            },
            {
                path:"/singleProperty",
                element:<SingleProperty/>
            }
        ]
    }
]



export const Browserroute= createBrowserRouter(routes);