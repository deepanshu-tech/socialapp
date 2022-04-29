


import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
<<<<<<< HEAD
import Profile from "./pages/profile/Profile";

=======
import {Routes , Route} from 'react-router-dom'
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
>>>>>>> refs/remotes/origin/main



function App() {
<<<<<<< HEAD
  return <Profile/>
  //<Login/>
  //<Register/>
  //<Home/>
  //<Register/>
  //<Login/>
  //
    // <div>
    //   <Home/>
    //   <Routes>
    //     <Route path="/" element={<Login/>} />
    //     <Route path="/signup" element={<Signup/>} />
    //     <Route path="/home" element={<Home/>} />
    //     <Route path="/register" element={<Register/>} />
    //     <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    //   </Routes> 
    // </div>
=======
  return(
  // <Login/>
  // <Register/>
  // <Home/>
  // <Register/>
  // <Login/>
>>>>>>> refs/remotes/origin/main
  
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
       
      </Routes> 
    </div>
  )
}

export default App;
