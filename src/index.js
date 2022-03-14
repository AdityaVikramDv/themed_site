import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './components/About'
import Reviews from './components/Reviews'
import ContactUs from './components/ContactUs'
ReactDOM.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
        </Route>
      </Routes>
    </Router>,document.getElementById('root')
);
