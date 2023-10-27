import React, { useEffect, useState } from "react";
import './Style/App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import { ApiDataProvider } from "./Components/ApiContext/ApiDataContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassRoom from "./Components/ClassRoom";

export default function App() {
  return (
    <div>
      <Router>
        <ApiDataProvider>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/classroom" element={<ClassRoom />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ApiDataProvider>
      </Router>
    </div>
  );
}
