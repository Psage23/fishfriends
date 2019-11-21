import React from 'react';
import './App.css';
import LoginForm from './components/login';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <h2>Fish Friends Build Week</h2>
        <LoginForm />
        <SignUp />
    </div>
  );
}

export default App;
