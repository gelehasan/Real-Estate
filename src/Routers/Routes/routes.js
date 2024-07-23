import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Properties from "../Properties/Properties";
import Homepage from "../HomePage/HomePage";
import SingleProperty from "../../Components/SingleProperty/SingleProperty";
import AdminSignIn from "../AdminRoute/admin";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ManageProperties from "../../Components/ManageProperties/ManageProperties.jsx";
import AddProperty from "../../Components/AddProperty/Addproperty.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import ContactMe from "../../Components/Contact/Contact.jsx";
import EditAboutMe from "../../Components/EditAboutMe/EditAboutMe.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
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
                path:"/properties/:id",
                element:<SingleProperty/>
            },
            {
                path:"/admin",
                element:<AdminSignIn />
            },
            {
                path:"/admin-dashboard",
                element: <ProtectedRoute element={<AdminDashboard />} />
            },
            {
                path:"/addservice",
                element:<ProtectedRoute element={<AddProperty />} /> 
            },
            {
                path:"updateservice/:id",
                element:<ProtectedRoute element={<AddProperty />} /> 
            },
            {
                path:"/manage-properties",
                element:<ProtectedRoute element={<ManageProperties />} /> 
            },
            {
                path:"/About",
                element:<AboutMe/>
            },
            {
                path:"/contact",
                element:<ContactMe />
            },
            {
                path:"/manage-about-me",
                element:<EditAboutMe/>
            }
        ]
    }
]



export const Browserroute= createBrowserRouter(routes);