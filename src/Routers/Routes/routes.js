import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Properties from "../Properties/Properties";
import Homepage from "../HomePage/HomePage";
import SingleProperty from "../../Components/SingleProperty/SingleProperty";
import AdminSignIn from "../AdminRoute/admin";
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
            },
            {
                path:"/admin",
                element:<AdminSignIn />
            }
        ]
    }
]



export const Browserroute= createBrowserRouter(routes);