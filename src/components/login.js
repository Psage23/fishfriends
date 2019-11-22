import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import UserCard from './UserCard';



const LoginForm = ({errors, touched, status}) => {
    const [returnUsers, setReturnUsers] = useState([]);
    
    useEffect( () => {
        status && setReturnUsers(returnUsers => [...returnUsers, status]);
    }, [status])

    return (
        <div className = "login">
            <h2>Welcome Back!</h2>
                <Form className="login-form">
                    <label>Username: 
                    <Field className= "input4" type="username" name="username" placeholder="Username"/>
                    </label>
                    {touched.username && errors.username && <p className="errors">{errors.username}</p>}
                    <label>Password: 
                    <Field className="input5" type="password" name="password" placeholder="Password"/>
                    </label>
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                    <button type="button">Submit</button>
                </Form>
            {returnUsers.map(returnUser => (
                <div key={returnUser.id}>
                    {/* <p>Username: {returnUser.username}</p>
                    <p>Password: {returnUser.password}</p> */}
                    <UserCard />
                </div>
            ))}
        </div>
    )
};

const FormikLoginForm = withFormik({
    mapsPropsToValue({username, password}) {
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(8).max(16).required()
    }),

    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log(response);
        })
        .catch(error => console.log(error.responese));
    }
})(LoginForm);

export default FormikLoginForm; 
