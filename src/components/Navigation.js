import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
return (
    <div>
        <div className="navBar">
            <h1>FishFriends</h1>
            <div className="link">
                <Link className="link1" to="/Signup">Sign Up</Link>
                <Link className="link2"to="/Login">Login</Link>
            </div>
        </div>
    </div>
    );
};

export default Navigation;