import React from "react";
import "./style.css";
import Login from "./Login";
const LoginUI = (props) => {
  const {
    onChange,
    switchLogin,
    onToggle,
    onSubmit,
    LoginError,
    LoginForm,
    Continue,
    onPressContinue,
  } = props;

  return (
    <>
      <div className="LoginContainer">
        <div className="LeftWrapper">
          <div className="WelcomeContainer">
            <img
              className="Logo"
              alt="logo"
              src={process.env.PUBLIC_URL + "./images/McAfee-Logo.png"}
            />
            <div className="Intro">Sign in to your McAfee account</div>
            <div className="IntroSubHeading">
              Enter your email address so we can find your account.
            </div>
          </div>
          <hr className="hr"></hr>
        </div>
        <div className="RightWrapper">
          <Login
            LoginError={LoginError}
            onChange={onChange}
            switchLogin={switchLogin}
            onSubmit={onSubmit}
            LoginForm={LoginForm}
            onToggle={onToggle}
            onPressContinue={onPressContinue}
            Continue={Continue}
          />
        </div>
      </div>
    </>
  );
};

export default LoginUI;
