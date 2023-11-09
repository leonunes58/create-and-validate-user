import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />}/>
          <Route path='/createuser' element={<Create />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
