
import React from 'react';
import './App.css';
import data from './data'
import HomeScreen from '../src/Screens/HomeScreen';
import PaintScreen from '../src/Screens/PaintScreen'
import {BrowserRouter,Route, Link} from 'react-router-dom'

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">Carolina DoArt</Link>
           </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h1>Painting Categories</h1>
          <button className="sidebar-close-button" onClick={closeMenu}>X</button>
          <ul>
            <li><h3>Portraits</h3></li>
            <li><h3>Pets</h3></li>
            <li><h3>Nature</h3></li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/paintings/:id" component={PaintScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
           
          </div>

        </main>
        <footer className="footer">
          Copy Rights C.DuArt
       </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;