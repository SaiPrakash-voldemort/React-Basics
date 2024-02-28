import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import SignUpForm from "../components/SignUpForm";
import { useNavigate } from "react-router-dom";
const MainScreen = () => {
  let history = useNavigate();
  //   const [auth, setAuth] = useState(false);
  //   if (auth) {
  //     return <Navigate replace to="/SignUpForm" />;
  //   }
  return (
    <div>
      <navbar>
        <ul>
          <Link to="/SignUpForm">
            <li>SignUp</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
        </ul>
      </navbar>
      <button onClick={() => history("/SignUpForm")}>Login</button>
    </div>
  );
};

export default MainScreen;
