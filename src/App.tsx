import React from 'react';
import './App.css';
import NavMenu from './Components/NavMenu/navMenu';
import AdminContent from './Components/AdminContent/adminContent';
import Router from './Components/Router/Router';




function App() {
  return (
    <div className="AdmPage-wrapper">
        <NavMenu/>
        <AdminContent/>
    </div>
);
}

export default App;
