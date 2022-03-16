import React,{useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';
import ThemeContextProvider from './contexts/ThemeContext';
import {UserContext} from './contexts/userContext';

function App() {
  const profileInfo = useContext(UserContext);
  if(!profileInfo.isLoggedIn){
    return  <div> Please <Link to="/login">login</Link></div>
  }
  return (
    <div className="container">
      <h1>Template</h1>
      <div className="centered">
          <div className="four green ui buttons">
          <Link to="/" className="ui button">Home</Link>
          <Link to="/about" className="ui button">About</Link>
          <Link to="/reviews" className="ui button">Reviews</Link>
          <Link to="/contactus" className="ui button">Contact Us</Link>
      </div>
      <div className="outletContainer">
      <ThemeContextProvider>
        <Outlet />
      </ThemeContextProvider>
      </div>
    </div>

    </div>
  );
}

export default App;
