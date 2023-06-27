import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useState } from "react";

const App=()=>{
  const [loginUser,setLoginUser]=useState({});
  console.log(loginUser);
  console.log(setLoginUser);
  return(
  <div className="App">
    <Router>
      <Routes>
     
        <Route path="/"   element={ loginUser && loginUser._id ? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
        <Route path="/login"   element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path="/register"   element={<Register/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;
