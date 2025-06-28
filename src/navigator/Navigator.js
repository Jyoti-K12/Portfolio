import React from 'react'
import Home from '../scenes/Home';
import Detail from '../scenes/Detail';
import Blogs from '../scenes/Blogs';
import About from '../scenes/About';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function Navigator() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Navigator