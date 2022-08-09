import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses';
import Pages from './components/Pages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ErrorPage from './components/ErorPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/pages" element={<Pages/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
