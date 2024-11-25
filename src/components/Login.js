import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import UserContext from "../utils/UserContext";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIslogin] = useState(true);

  const {loginUserData, setUserDetails} = useContext(UserContext)

  const handleSignUp = () => {
    setIslogin(!isLogin);
  };

  console.log(loginUserData)


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);

      if (isLogin) {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            setUserDetails(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            setUserDetails(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      }

      //JSON.stringify(values, null, 2)
    },
  });

  return (
    <div>
      <Header></Header>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5"> {isLogin ? "Sign in" : "Sign Up"} </h3>
                  <form onSubmit={formik.handleSubmit}>
                    {!isLogin && (
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="typeEmailX-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control form-control-lg"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                      </div>
                    )}

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <label
                        className="form-check-label"
                        onClick={handleSignUp}
                      >
                        Don't have account chick here to signup
                      </label>
                    </div>
                    {isLogin && (
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    )}

                    {!isLogin && (
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
