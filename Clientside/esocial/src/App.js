


import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {Routes , Route} from 'react-router-dom'
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import FriendProfile from "./components/FriendProfile/FriendProfile";
import UserDetails from "./pages/UserDetails/UserDetails";



function App() {
 
  return(
  // <Login/>
  // <Register/>
  // <Home/>
  // <Register/>
  // <Login/>
  // <Profile/>
  // <FriendProfile/>
  //<UserDetails/>
  
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/searchprofile" element={<FriendProfile/>}></Route>
        <Route path = "/userDetails" element={<UserDetails/>}></Route>

       
      </Routes> 
    </div>
  )
}

export default App;
