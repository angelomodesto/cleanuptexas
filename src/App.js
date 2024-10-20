import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Login from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/HomePage";
import CreateEvent from "./pages/CreateEventPage";
import SignUpEvent from "./pages/SignUpEventPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Login />} />
        <Route path="/home" element={<Login />} />
        <Route path="/createEvent" element={<Login />} />
        <Route path="/signUpEvent" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
