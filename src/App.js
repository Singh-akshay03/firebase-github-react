import {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./context/UserContext";
import { initializeApp } from 'firebase/app';

import Home from './Components/Home'
import LogIn from './Components/LogIn'
import Signup from './Components/Signup'
import PageNotFound from './Components/Home'
import Header from "./layout/Header";
// import Footer from "./layout/Footer";

import firebaseConfig from './config/firebaseConfig';
// import { getAuth } from "firebase/auth";

//init firebase

initializeApp(firebaseConfig);

// const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
      </UserContext.Provider>
    </Router>
  );
}

export default App;
