 import Navbar from "./Routers/NavBar/Navbar";
 import { Outlet } from "react-router-dom";
function App() {
  return (
    <> 
 
      <Navbar />
      
      <Outlet />        
  </>
  );
}

export default App;
