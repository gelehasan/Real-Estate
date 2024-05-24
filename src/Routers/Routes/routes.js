import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Properties from "../Properties/Properties";
import Homepage from "../HomePage/HomePage";
import SingleProperty from "../../Components/SingleProperty/SingleProperty";
import AdminSignIn from "../AdminRoute/admin";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ManageProperties from "../../Components/ManageProperties/ManageProperties.jsx";
import AddProperty from "../../Components/AddProperty/Addproperty.jsx";

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
            },
            {
                path:"/admin-dashboard",
                element: <AdminDashboard />
            },
            {
                path:"/addproperty",
                element:<AddProperty />
            },
            {
                path:"/manage-properties",
                element:<ManageProperties />
            }
        ]
    }
]



export const Browserroute= createBrowserRouter(routes);