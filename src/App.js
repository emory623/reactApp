import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <div className='navbar'>
                <div className="navbar__items"> <a href="/about">faq</a></div>
                <div className="navbar__items"> <a href="/posts">product</a></div>
            </div>
            <Route path="/about">
                <About/>
            </Route>
            <Route path='/posts'>
                <Posts/>
            </Route>
        </BrowserRouter>
    );
};

export default App;