import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Home from "./components/Home";
const App = () => {
  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/list" element={<Details />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;
