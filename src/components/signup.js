import React, {useState, useEffect} from 'react';
import { withFormik, Form } from "formik";
import { CardBody, Card } from 'reactstrap';
import * as Yup from 'yup';
import axios from 'axios';



const SignUp = ({props, values, errors, touched, status}) => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect( () => {
        status && setNewUsers(newUsers => [...newUsers, status])
    }, [status])

    return (
        <div className = "signUp">
            <Card>
                <CardBody>
                <Form className="sign-up">
                    <label>Full Name: 
                    <input type="text" name="name" placeholder="name"/>
                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                    <label>Email: 
                    <input type="email" name="email" placeholder="email"/>
                    </label>
                    {touched.email && errors.email && <p classsName="errors">{errors.email}</p>}
                    <label>Password: 
                    <input type="password" name="password" placeholder="password"/>
                    </label>
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                    <button type="submit">Submit</button>
                </Form>
                </CardBody>
            </Card>    
            {newUsers.map(newUser => (
                <div key={newUser.id}>
                    <p>Full Name: {newUser.name}</p>
                    <p>Email: {newUser.email}</p>
                    <p>Password: {newUser.password}</p>
                </div>    
            ))}
        </div>
    )
};

const FormikSignUp = withFormik({
    mapsPropsToValue({name, email, password}) {
        return {
            name: name || "",
            email: email || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email('Please enter a valid email').required('Please enter an email'),
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
})(SignUp);
export default FormikSignUp;