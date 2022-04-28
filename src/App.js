import { Route , Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Signup from "./components/Signup/Signup";



function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  )
}

export default App;
