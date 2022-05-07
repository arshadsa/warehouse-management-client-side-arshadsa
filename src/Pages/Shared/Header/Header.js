import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  user && console.log(user.uid);
  const handleSignOut = () =>{
    signOut(auth);
}

  return (
    <nav>
      <div className="header-container">
        <div className="header">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/inventory">Inventory</CustomLink>
          <CustomLink to="/manage-inventory">Manage Inventory</CustomLink>
          <CustomLink to="/add-new-item">Add New Item</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          
          {
            user ? <>
            <CustomLink to={`/user/${user.uid}`}>My Items</CustomLink>
            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
            </>
            :
            <>            
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
            </>
          }
          
          


        </div>
      </div>
    </nav>
  );
};

export default Header;
