import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutePage from "./pages/AboutePage.jsx";
import CharacteresPage from "./pages/CharacteresPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "navbar/Navbar";
import Counter from "counter/Counter";
import Card from "card/Card";
import Especification from "card/Especification";
import About from "about/About";

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element = {<HomePage/>} />
      <Route path="/counter" element = {<Counter/>} />
      <Route path="/galery/:id" element={<Especification/>}/>
      <Route path="/galery" element = {<Card/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="*" element = {<NotFound/>} />
    </Routes>
  </BrowserRouter>

);
ReactDOM.createRoot(document.getElementById("app")).render(<App/>);