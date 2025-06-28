import React from 'react'
import images from '../assets/images';
import Social from './Social';
function Header() {
    return (

        <header id="top" className="position-sticky top-0 start-0" style={{
            'z-index': '10'
        }} >
            <nav className="navbar bg-white fixed-top">
                <div className="container-fluid">
                    <div className="d-flex align-items-center g-4 pb-4">
                        <a className="navbar-brand d-flex" href="index">
                            <h3 className="display-1 fs-2">  Portfolio</h3>
                        </a>
                        <Social />

                    </div>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navabar-toggler-icon">
                            <div className="text-primary menu" >
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </span>
                    </button>
                    <div className="offcanvas offcanvas-end text-white bg-black" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white ms-3" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 p-4">
                                <li className="nav-item">
                                    <a className="nav-link active text-uppercase ls-4 text-white" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Single Portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Single Post
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Styles
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase ls-4 text-white" aria-current="page" href="index.html">Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header >


    )
}

export default Header