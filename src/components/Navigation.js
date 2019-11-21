import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
return (
    <div>
        <div className="App">
            <h1>FishFriends</h1>
            <div>
            <Link to="/signup">Sign Up</Link>
            </div>
            <div>
            <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
    );
};

export default Navigation;