import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About';
import Contact from './Contact.jsx';
import Blog from './Blog.jsx';
import Service from './Service.jsx';
import Portfolio from'./Portfolio';
import './index.css';
import Footer from './Footer.jsx';
import L_blog from './L_blog.jsx';

ReactDOM.render(
    <>
        <Router>
        <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>  
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>  
                <Route path='/Blog' element={<Blog/>}></Route>    
                <Route path='/Service' element={<Service/>}></Route>  
                <Route path='/Portfolio' element={<Portfolio/>}></Route> 
            </Routes>
        </Router>
        <L_blog></L_blog>
        <Footer></Footer>
        
    </>
    ,document.getElementById('root')
)
