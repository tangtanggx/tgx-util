import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { Home } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
            </Routes>
        </BrowserRouter>

    );
}

export default App;
