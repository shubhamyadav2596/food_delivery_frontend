import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin = { setShowLogin } }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowLogin(false);
            }}
            alt=""
          />
          </div>
          <div className="login-popup-inputs">
            {currentState === "Login" ? (
            <></>
            ) : (
              <input type="text" placeholder="your name" required />
            )}
            <input type="emai" placeholder="your email" required />
            <input type="password" placeholder="apply password" required />
          </div>
          <button>
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currentState === "Login" ? (
            <p>
              create a new account{" "}
              <span onClick={() => setCurrentState("Sign Up")}>click here</span>
            </p>
          ) : (
            <p>
              already have an account{" "}
              <span onClick={() => setCurrentState("Login")}>login here</span>
            </p>
          )}
      </form>
    </div>
  );
};

export default LoginPopUp;
