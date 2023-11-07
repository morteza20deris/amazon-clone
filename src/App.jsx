import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.getElementById("loader").style.display="none"
  },[])
  return (
    <BrowserRouter>
      <div className="app">
        <NotificationContainer />
        
        <div id="loader">
          <div id="loader__container" className="loader__container">
            <CircularProgress size="8vw" />
            <h1>Please Wait...</h1>
          </div>
        </div>
        <Routes>
          <Route path="/orders" element={<><Header /><Orders /></>} />
          <Route path="/login" element={ <Login />} />
          <Route index element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
