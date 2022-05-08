import React, { useEffect } from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button
          style={{ maxWidth: "250px" }}
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          style={{ maxWidth: "250px" }}
          className="btn btn-secondary w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          style={{ maxWidth: "250px" }}
          onClick={() => signInWithGithub()}
          className="btn btn-secondary w-50 d-block mx-auto"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
