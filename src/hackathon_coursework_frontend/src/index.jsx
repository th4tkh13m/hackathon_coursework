import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Create from "./components/Create.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
        <Link to="/create">to create</Link>
      </BrowserRouter>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);