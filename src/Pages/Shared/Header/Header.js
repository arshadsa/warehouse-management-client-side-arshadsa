import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  user && console.log(user.uid);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    // <nav>
    //   <div className="header-container">
    //     <div className="header">
    //       <CustomLink to="/home">Home</CustomLink>
    //       <CustomLink to="/inventory">Inventory</CustomLink>
    //       <CustomLink to="/manage-inventory">Manage Inventory</CustomLink>
    //       <CustomLink to="/add-new-item">Add New Item</CustomLink>
    //       <CustomLink to="/blogs">Blogs</CustomLink>
    //       <CustomLink to="/about">About</CustomLink>

    //     </div>
    //   </div>
    // </nav>
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            {/* <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <CustomLink class="nav-link px-2 text-secondary" to="/home">
              Home
            </CustomLink>
            <CustomLink class="nav-link px-2 text-white" to="/inventory">
              Inventory
            </CustomLink>
            <CustomLink class="nav-link px-2 text-white" to="/manage-inventory">
              Manage Inventory
            </CustomLink>
            <CustomLink class="nav-link px-2 text-white" to="/add-new-item">
              Add New Item
            </CustomLink>
            <CustomLink class="nav-link px-2 text-white" to="/blogs">
              Blogs
            </CustomLink>
            <CustomLink class="nav-link px-2 text-white" to="/about">
              About
            </CustomLink>
          </ul>

          {user ? (
            <div class="text-end d-flex">
              <CustomLink
                type="button"
                class="btn btn-outline-light me-2"
                to={`/user/${user.uid}`}
              >
                My Items
              </CustomLink>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div class="text-end d-flex">
              <CustomLink
                type="button"
                class="btn btn-outline-light me-2"
                to="/login"
              >
                Login
              </CustomLink>
              <CustomLink type="button" class="btn btn-warning" to="/register">
                Register
              </CustomLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
