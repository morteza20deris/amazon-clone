import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={ <Login/>} />
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
