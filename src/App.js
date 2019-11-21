import React from 'react';
import './App.css';
import Login from './components';
import Signup from './components';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="navBar">
        <h2>FishFriends</h2>
        <nav>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Login" component={Login}/>
        </nav>
      </header>
      <button>Login</button>
      <button>Sign Up</button>

      <footer>
      <nav className="navBottom">
        <h2>FishFriends</h2>
          <nav className="nav">
              <a href="#">Sign Up</a>
              <a href="#">LogIn</a>
            </nav>
              </nav>
            <span>
                {/* social media icons here */}
                <p>2019 FishFriends</p>
            </span>
      </footer>
    </div>
  );
}

export default App;
