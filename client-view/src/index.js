import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="register" element={<Register />} />
      </Routes> 
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
