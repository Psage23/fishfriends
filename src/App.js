import React from 'react';
import './App.css';
import LoginForm from './components/Login';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';



function App() {

  return (
    <div>
      <div className="App">
      <Navigation/>
      <video id="background-video" loop autoPlay>
      <source src="https://player.vimeo.com/external/223082126.sd.mp4?s=baf637d16279940d71f09848ceaa380358065e32&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      <source src="https://player.vimeo.com/external/223082126.sd.mp4?s=baf637d16279940d71f09848ceaa380358065e32&profile_id=164&oauth2_token_id=57447761" type="video/ogg" />
      Your browser does not support the video tag.
      </video>
      </div>
      <div className="Body">
      <Route path="/Signup" component={Signup}/>
      <Route path="/Login" component={LoginForm}/>
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
