import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import Add_Contact from './components/add-contact/Add_Contact';
import Contact_List from './components/contact_list/Contact_List';
import View_Contact from './components/view-contact/View_Contact';
import Update_Contact from './components/update-contact/Update_Contact';
import Loading_Screen from './components/loading-screen/Loading_Screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">   
      <Router>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Contact_List />}/>
          <Route path='add-contact' element={<Add_Contact />}/>
          <Route path='view-contact/:contactId' element={<View_Contact />}/>
          <Route path='update-contact/:contactId' element={<Update_Contact />}/>
          <Route path='awd' element={<Loading_Screen />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
