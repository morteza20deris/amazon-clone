import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header/><h1>Check Out</h1></>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
