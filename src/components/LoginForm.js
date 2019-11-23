import React, {useState} from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const LoginForm = ({touched,errors}) => {
    const [returnUsers] = useState([])

    return (
        <div className = "login">
            <h2>Welcome Back!</h2>
                <Form className="login-form">
                    <label>Username: 
                    <Field className= "input4" type="text" name="name" placeholder="Username"/>
                    </label>
                    {touched.username && errors.username && <p className="errors"></p>}
                    <label>Password: 
                    <Field className="input5" type="password" name="password" placeholder="Password"/>
                    </label>
                    {touched.password && errors.password && <p className="errors"></p>}
                    <button type="button">Submit</button>
                </Form>
            {returnUsers.map(returnUser => (
                <div key={returnUser.id}>
                    <p>Username: {returnUser.name}</p>
                    <p>Password: {returnUser.password}</p>
                </div>
            ))}
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapsPropsToValue({name, password}) {
        return {
            username: name || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().min(2).max(16).required()
    }),

    handleSubmit(values) {
        console.log(values)
    }
})(LoginForm);

export default FormikLoginForm; 
