import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className="container d-flex align-items-center">
                    <a href="#" className='navbar-brand d-flex'>
                        <i className="fa fa-mobile fa-2x me-3"></i>
                        <p className='py-2 h3'>React Contact App</p>
                    </a>                        
                    <button className="btn btn-success float-end rounded-3 fw-bold">
                        + <span className='ms-1 d-none d-sm-inline'>New Contact</span>
                    </button>            
                </div>
            </nav>
            <div className="container mt-3 d-none d-sm-block">
                <h3 className='fw-bold'>Contacts</h3>
                <p className='fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit ipsam numquam repellendus officia sed. Fuga, incidunt sapiente maiores corporis odit aspernatur corrupti eaque excepturi quae quasi atque delectus impedit!</p>
            </div>
        </div>
    )
}

export default Navbar