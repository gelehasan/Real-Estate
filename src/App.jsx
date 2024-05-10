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
      if (user) {  
         userInfo=  await getUserInformation (user.uid);
         console.log(user)
      } 
  
      dispatch(setCurrentUser(userInfo))
  
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
