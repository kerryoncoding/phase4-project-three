import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
// import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup"
// import "./styles.css";

function Login() {

   const [signUp, setSignUp] = useState(false)
   const history = useHistory()


   const handleClick = () => setSignUp((signUp) => !signUp)
   const formSchema = yup.object().shape({
      username: yup.string().required("Please enter a username"),
      email: yup.string().email()
    })
   
   const formik = useFormik({
      initialValues: {
         username: "",
         email: ""
      },
      validationSchema:formSchema,
      onSubmit: (values) => {
         fetch(signUp ? 'api/users' : 'api/login', {
            method: "POST",
            header: {
               "Content-Type":"application/json"
            },
            body: JSON.stringify(values)
         })
         .then(res => res.json())
            .then(user => {
               updateUser(user)
               history.push('/')
         })
         // change this  vvvvvv
         // alert(JSON.stringify(values, null, 2));
      },
   });
   
   
   return (
      <div className="LoginFormContainer">
         <h1>Please login or sign up!</h1>
         <h2>{signUp ? 'Already a member?' : 'Not a member?'}</h2>
         <button className="messageToggleButton" onClick={handleClick}>{signUp ? 'Log In!' : 'Register now!'}</button>
         <br/>
         <form className="LoginForm" onSubmit={formik.handleSubmit}>
           <label>Username: </label>
            <br />
            <input
               id="username"
               name="username"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.username}
            />
            <br />
            <br />
            {signUp && (
               <>
                  <label>Email Address: </label>
                  <br/>
                  <input
                     id="email"
                     name="email"
                     type="text"
                     onChange={formik.handleChange}
                     value={formik.values.email}
                  />
               </>
            )}
            <br/>
            <input className="messageToggleButton" type='submit' value={signUp?'Sign Up!':'Log In!'} />
         </form>
      </div>
   );
}

export default Login;

//  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import {useHistory} from 'react-router-dom'
// import styled from "styled-components";
// import { useFormik } from "formik"



// import * as yup from "yup"
// import React, {useState} from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik';


// function Login({ updateUser }) {
//    const [signUp, setSignUp] = useState(false)
//    const history = useHistory()
 
//    const handleClick = () => setSignUp((signUp) => !signUp)
//    const formSchema = yup.object().shape({
//       username: yup.string().required("Please enter a username"),
//       email: yup.string().email()
//    })
   
//    const formik = useFormik({
//       initialValues: {
//          username: '',
//          email: ''
//       },
//       validationSchema: formSchema,
//       onSubmit: (values) => {
//          fetch(signUp ? '/users' : '/login', {
//             method: "POST",
//             headers: {
//                "Content-Type": "application/json"
//             },
//             body: JSON.stringify(values)
//          })
//             .then(res => res.json())
//             .then(user => {
//                updateUser(user)
//                history.push('/')
//             })
//       }
//    })

//    return (
//       <>
//          {Object.values(formik.errors).map(error => <h2 style={{ color: 'red' }}> {error}</h2>)}
//          <h2>Please Log in or Sign up!</h2>
//          <h2>{signUp ? 'Already a member?' : 'Not a member?'}</h2>
//          <button onClick={handleClick}>{signUp ? 'Log In!' : 'Register now!'}</button>
//          <Form onSubmit={formik.handleSubmit}>
//             <label>
//                Username
//             </label>
//             <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
//             {signUp && (
//                <>
//                   <label>
//                      Email
//                   </label>
//                   <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />
//                </>
//             )}
//             <input type='submit' value={signUp ? 'Sign Up!' : 'Log In!'} />
//          </Form>
//       </>
//    )
   
// }

// export default Login;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const Login = () => (  
//    <div>
//      <h1>Any place in your app!</h1>
//       <Formik
//          initialValues={{ email: '', password: '' }}
//          validate={values => {
//             const errors = {};
//             if (!values.email) {
//                errors.email = 'Required';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//                errors.email = 'Invalid email address';
//             }
//             return errors;
//          }}
//          onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//                alert(JSON.stringify(values, null, 2));
//                setSubmitting(false);
//             }, 400);
//          }}
//       >
      
//          {({ isSubmitting }) => (
//             <Form>
//                <label>Email</label>
//                <Field type="email" name="email" />
//                <ErrorMessage name="email" component="div" />
//                <label>Password</label>
//                <Field type="password" name="password" />
//                <ErrorMessage name="password" component="div" />
//                <br/>
//                <button type="submit" disabled={isSubmitting}>Submit</button>
//             </Form>
//          )}
//      </Formik>
//    </div>
// );

// export default Login;