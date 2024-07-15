import React, { useEffect } from "react";
import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";

// create a schema for Email and Password validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one uppercase, one lowercase, one number, and one special character"
    ), 
});


const Login = () => {
  const navigate = useNavigate();
  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, setLocalStorage] = useLocalStorage("user");

  useEffect(() => {
    // if length of token is equal to 100 then navigate to previous page
    if (getLocalStorage?.token?.length === 100) {
      navigate(-1);
    }
  }, []);

  function handleNavigate(values) {
    let index = values?.email.indexOf('@');
    let name = values?.email.slice(0, index);

    // generate 100 character random string
    const genRandomStringNthChar = () => {
      return [...Array(100)]
        .map(() => Math.random().toString(36)[2])
        .join("");
    };

    // store userName and token in localStorage
    setLocalStorage({
      ...getLocalStorage,
      "userName": name,
      "token": genRandomStringNthChar()
    })
    // navigate to previous page
    navigate(-1);
  }

  // if length of token is equal to 100 then return null
  if (getLocalStorage?.token?.length === 100) return null;

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // invoke handleNavigate function and pass input filed data
          handleNavigate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login-container">
            <div className="login-form">
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
