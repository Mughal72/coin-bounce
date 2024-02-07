import styles from "./Login.module.css";
import TextInput from "../../components/TextInput/TextInput";
import loginSchema from "../../schemas/loginSchema";
import { useFormik } from "formik";

function Login() {
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
        type ="text"
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placehoder="username"
        error={errors.username && touched.username ? 1: undefined}
        errormessage={errors.username}
      />
      <TextInput
       type="password"
       name="password"
       value={values.password}
       onBlur={handleBlur}
       onChange={handleChange}
       placehoder="password"
       error={errors.password && touched.password ? 1 : undefined}
       errormessage={errors.password}
      />
      <button className={styles.loginButton}>Log In </button>
      <span>
        Don't have an account? <button className={styles.createccount}> Register </button>
      </span>
    </div>
  );
}

export default Login;
