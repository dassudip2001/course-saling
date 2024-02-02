import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/Login";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} /> 
      <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
