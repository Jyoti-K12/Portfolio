import React from 'react'
import images from '../assets/images'
import Social from './Social'

function Footer() {
    return (
        <footer id="footer" className="bg-black text-white py-5">
            <div className="container-sm">
                <div className="row g-md-5 my-5">
                    <div className="col-md-4">
                        <div className="info-box">
                            <h2>Portfolio</h2>
                            <p className="py-4">
                                Find me here
                            </p>
                            <Social />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-6">
                                {/* <ul className="list-unstyled">
                                    <li>
                                        <a className="text-decoration-none text-white" href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none text-white" href="#">About</a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none text-white" href="index.html">Team</a>
                                    </li>
                                    <li>
                                        <a className="text-decoration-none text-white" href="index.html">Portfolio</a>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="col-6">
                                {/* <h6>
                                    <a className="text-decoration-none text-white" href="index.html">Blog</a>
                                </h6>
                                <h6>
                                    <a className="text-decoration-none text-white" href="index.html">Contact</a>
                                </h6> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <p>
                            Just feel free to contact if you wanna collaborate with me, or simply have a conversation.
                        </p>
                        <h3>
                            <a href="mailto:jyotiranaut96@gmail.com" className="text-white text-decoration-none">jyotiranaut96@gmail.com</a>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <p>©2025 Designed and Developed by <a href="/" className="text-white" target="blank">Jyoti Kumari</a> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer