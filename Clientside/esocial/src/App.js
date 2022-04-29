


import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import {Routes , Route} from 'react-router-dom'
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";



function App() {
  return(
  // <Login/>
  // <Register/>
  // <Home/>
  // <Register/>
  // <Login/>
  
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
