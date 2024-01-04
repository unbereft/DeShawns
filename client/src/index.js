import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { AllWalkers } from "./components/Walkers/AllWalkers";
import { AllDogs } from "./components/Dogs/AllDogs";
import { AllCities } from "./components/Cities/AllCities";
import { Dog } from "./components/Dogs/Dog";
import { DogDetails } from "./components/Dogs/DogDetails";
import { DogForm } from "./components/Dogs/DogForm";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="walkers" element={<AllWalkers />} />
        <Route path="dogs" element={<AllDogs />} />
        <Route path="dogs/:id" element={<DogDetails />} />
        <Route path="cities" element={<AllCities />} />
        <Route path="dogs/new" element={<DogForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
