import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './components/Auth/Login.jsx'
import Sidebar from './components/Layout/Sidebar/Sidebar.jsx';
import Navbar from './components/Layout/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
