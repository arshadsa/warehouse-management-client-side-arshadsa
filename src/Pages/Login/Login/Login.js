import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useToken from "../../../hooks/useToken";
import './Login.css';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // console.log(from);
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [token] = useToken(user);
  
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      // console.log('toast');
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <br/><br/><br/>
      <h2 className="text-secondary text-center mt-2">Please Login</h2>
      <br/><br/>
      <Form onSubmit={handleSubmit} className='login-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            className=""
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <br/>
      <p className='login-form'>
        New to Inventory?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>{" "}
      </p>
      <p className='login-form'>
        Forget Password?{" "}
        <button
          className="btn btn-link text-danger pe-auto text-decoration-none p-0 m-0"
          onClick={resetPassword}
        >
          Reset Password
        </button>{" "}
      </p>
      <br></br>
      <SocialLogin></SocialLogin>
      <br/>
      <br/>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
