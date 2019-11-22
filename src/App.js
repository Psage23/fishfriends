import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';


function App() {
  return (
    <div>
      <div className="App">
      <Navigation/>
      </div>
      <div className="Body">
        <Home />
      <Route path="/Signup" component={Signup}/>
      <Route path="/Login" component={Login}/>
      </div>
      <footer className="navBottom">
        <h2>FishFriends</h2>
            <span>
                {/* social media icons here */}
                <p>2019 FishFriends</p>
            </span>
      </footer>
    </div>
  );
}

export default App;
