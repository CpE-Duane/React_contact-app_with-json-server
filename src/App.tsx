import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Add_Contact from './components/add-contact/Add_Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Add_Contact />
    </div>
  );
}

export default App;
