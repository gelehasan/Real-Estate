import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Properties from "../Properties/Properties";
import Homepage from "../HomePage/HomePage";
import SingleProperty from "../../Components/SingleProperty/SingleProperty";
import AdminSignIn from "../AdminRoute/admin";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ManageProperties from "../../Components/ManageProperties/ManageProperties.jsx";
import AddProperty from "../../Components/AddProperty/Addproperty.jsx";
<<<<<<< HEAD

const routes = [
=======
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import ContactMe from "../../Components/Contact/Contact.jsx";
import EditAboutMe from "../../Components/EditAboutMe/EditAboutMe.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
const routes= [
>>>>>>> 812bf53b58850670afd6e0dc17dd3073610516d9
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/properties",
                element: <Properties />
            },
            {
<<<<<<< HEAD
                path: "/singleProperty",
                element: <SingleProperty />
=======
                path:"/properties/:id",
                element:<SingleProperty/>
>>>>>>> 812bf53b58850670afd6e0dc17dd3073610516d9
            },
            {
                path: "/admin",
                element: <AdminSignIn />
            },
            {
<<<<<<< HEAD
                path: "/admin-dashboard",
                element: <AdminDashboard />
            },
            {
                path: "/addproperty",
                element: <AddProperty />
=======
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
>>>>>>> 812bf53b58850670afd6e0dc17dd3073610516d9
            }
        ]
    }
]



export const Browserroute = createBrowserRouter(routes);