import React, {useState, useEffect} from 'react';
import { withFormik, Form } from "formik";
import { CardBody, Card } from 'reactstrap';
import * as Yup from 'yup';
import axios from 'axios';
import AddLogForm from './Logform'


const LoginForm = ({props, values, errors, touched, status}) => {
    const [users,setUsers] = useState([]);

    useEffect( () => {
        status && setUsers(users => [...users, status]);
    }, [status])

    return (
        <div className = "login">
            <Card>
                <CardBody>
                <Form className="login-form">
                    <label>Username: 
                    <input type="text" name="username" placeholder="username"/>
                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                    <label>Password: 
                    <input type="password" name="password" placeholder="password"/>
                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                    <button type="submit">Submit</button>
                </Form>
                </CardBody>
            </Card>
            {users.map(user => (
                <div key={user.id}>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.passoword}</p>
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
        name: Yup.string().required(),
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
