import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/spec/Home.jsx";
import Create from "./components/spec/Create.jsx";
import Logo from "./assets/images/logo_colored.png";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <ConnectDialog className="wallet_dialog"/>
      </Container>
    </BrowserRouter>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

const Container = styled.div`
  .dialog-styles{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #00000050;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      background-color: #fff;
      padding: 35px;
      border-radius: 10px;
      img{
        width: 50px;
        height: 50px;
      }
    }
  }
`;