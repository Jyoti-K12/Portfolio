import React from 'react'

function Footer() {
    return (
        <div className="footer-container foot" >
            <div className="container-fluid">
                <footer>
                    <div className="">
                        <div className="row">
                            <div className="col-md-4 footer-column">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <span className="footer-title">Product</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Product 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Product 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Plans & Prices</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Frequently asked questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-column">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <span className="footer-title">Company</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Job postings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">News and articles</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-column">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <span className="footer-title">Contact & Support</span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link"><i className="fa fa-phone"></i> +47 45 80 80 80</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-comments"></i> Live chat</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-envelope"></i> Contact us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-star"></i> Give feedback</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center"><i className="fa fa-ellipsis-h"></i></div>

                        <div className="row text-center">
                            <div className="col-md-4 box">
                                <span className="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                                </span>
                            </div>
                            <div className="col-md-4 box">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 box">
                                <ul className="list-inline quick-links">
                                    <li className="list-inline-item">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        </div >
    )
}

export default Footer