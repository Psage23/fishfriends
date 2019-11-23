import React, {useEffect} from 'react';
import LoginForm from './LoginForm';
import UserCard from './UserCard';
import axios from 'axios';


export default function Login() {
    useEffect( () => {
        axios.get('https://randomuser.me/api/')
        .then(response => {
            console.log(response)
        })
    }, []);

    return (
        <div className = "login">
            <LoginForm/>
            <UserCard />
        </div>
    )

}
    

    

