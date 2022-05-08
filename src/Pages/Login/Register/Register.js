import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    //
  };

  return (
    <div className="container w-50 mx-auto">
      <br />
      <br />
      <PageTitle title="Register"></PageTitle>
      <div className="register-form">
        <h2 className="text-secondary text-center mt-2">Please Register</h2>
        <br/><br/>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" id="" placeholder="Your Name" />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />
          {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label> */}
          <label
            className={`ps-2 ${agree ? "" : "text-danger"}`}
            htmlFor="terms"
          >
            Accept Terms and Conditions
          </label>
          <input
            disabled={!agree}
            className="w-50 mx-auto btn btn-primary mt-2"
            type="submit"
            value="Register"
          />
        </form>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
