import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './scenes/About';
import Blogs from './scenes/Blogs';
import Detail from './scenes/Detail';
import Home from './scenes/Home';
import PageNotFound from './scenes/PageNotFound';
import Profile from './scenes/Profile';
import Contact from './scenes/Contact';
import FuncCom from './scenes/FuncCom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/functional" element={<FuncCom />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
