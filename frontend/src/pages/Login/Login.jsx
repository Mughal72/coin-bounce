import styles from "./Login.module.css";
import TextInput from "../../components/TextInput/TextInput";
import loginSchema from "../../schemas/loginSchema";
import { useFormik } from "formik";
import {login} from '../../api/internal';
import {setUser} from '../../store/userSlice';
import {useDispatch} from 'react-redux';
import { Navigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate =  Navigate();

    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const handleLogin =  async() =>{
        const data = {
            username: values.username,
            password: values.password
        }
        const response = await login(data);

        if(response.status === 200){
            // 1. setuser 
            const user = {
                _id: response.data.user._id,
                email: response.data.user.email,
                username: response.data.user.username,
                auth: response.data.user.auth

            }

            dispatch(setUser(user));
            // 2. redirect to home page
            navigate('/')
        }

        else if(response.code === 'ERR_BAD_REQUEST'){
            //  display error message
            setError(response.response.data.errormessage)
        }
    }


  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

       validationSchema: loginSchema
  });
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginHeader}>Log in to your account</div>
      <TextInput
        type="text"
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="username"
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />
      <TextInput
        type="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="password"
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />
      <button className={styles.logInButton} onClick={handleLogin} >Log In </button>
      <span>
        Don't have an account? {" "} 
        <button className={styles.createAccount} onClick={navigate('/signup')}> Register </button>
      </span>
    </div>
  );
}

export default Login;
