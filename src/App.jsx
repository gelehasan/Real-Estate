 import { useEffect } from "react";
import Navbar from "./Routers/NavBar/Navbar";
 import { Outlet } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { getUserInformation, onAuthStateChangedListener } from "./Firebase/firebase";
 import { setCurrentUser } from "./Store/Reducers/userReducer/userReducer";
function App() {
  
  const dispatch= useDispatch();
  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener( async (user)=> {
      let userInfo;
   console.log(user.uid)
   if (user) {  
    userInfo=  await getUserInformation (user.uid);
    dispatch(setCurrentUser(userInfo))
 } 

  
    });
    return unsubscribe;
  }, []);

  return (
    <> 
 
      <Navbar />
      
      <Outlet />        
  </>
  );
}

export default App;
