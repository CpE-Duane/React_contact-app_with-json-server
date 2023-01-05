import React from 'react'
import {BrowserRouter as Router ,Route , Link
} from "react-router-dom";
import Contact_List from '../contact_list/Contact_List';
import "./navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className="container d-flex align-items-center justify-content-between">
                    <a href="/" className='navbar-brand d-flex align-items-center'>
                        <i className="fa fa-mobile fa-2x me-3"></i>
                        <span className='h3'>React Contact App</span>
                    </a>
                    <Link to="add-contact" className="btn btn-success float-end rounded-3 fw-bold">
                        + <span className='ms-1 d-none d-sm-inline'>New Contact</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar