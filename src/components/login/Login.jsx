import React from "react";
import "./style.css";
import { AiOutlineMail } from "react-icons/ai";

const Login = (props) => {
  const {
    onChange,
    switchLogin,
    onSubmit,
    LoginError,
    LoginForm,
    onToggle,
    Continue,
    onPressContinue,
  } = props;
  return (
    <div className="LoginWrapperContainer">
      <form className="InputWrapper">
        <div className="InputLabel">Email</div>
        <div
          className="InputAndLogo"
          style={{
            border:
              LoginError.isEmailError === true
                ? "2px solid red"
                : LoginError.isEmailError === false
                ? "2px solid green"
                : "",
          }}
        >
          <AiOutlineMail
            style={{
              height: "2rem",
              width: "2rem",
              "margin-top": "0.5rem",
              color: "rgb(175, 174, 174)",
            }}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={LoginForm.email}
            placeholder="Email"
            className="Input"
            onChange={onChange}
          />
        </div>
        {LoginError.email && <div className="Error">{LoginError.email}</div>}
        {Continue && !switchLogin && (
          <>
            <div className="InputLabel">Password</div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="Input"
              onChange={onChange}
            />
          </>
        )}
        {Continue && switchLogin && LoginForm.otpAvailable && (
          <>
            <div className="InputLabel">one-time passcode</div>
            <input id="otp" name="otp" className="Input" onChange={onChange} />
          </>
        )}
        {!Continue && (
          <button className="continueButton" onClick={onPressContinue}>
            <div>Continue</div>
          </button>
        )}

        {Continue && (
          <button className="RequestOtp" onClick={onSubmit}>
            {!switchLogin ? (
              <div>Login</div>
            ) : LoginForm.otpAvailable ? (
              <div>Sign in</div>
            ) : (
              <div>Request one-time passcode</div>
            )}
          </button>
        )}
      </form>
      <div className="Error">{LoginError.databaseError}</div>
      {Continue && (
        <div className="SwitchContainer">
          <div className="Switch">OR</div>
          <button className="SwitchBtn" onClick={onToggle}>
            {!switchLogin ? (
              <div>Sign in with a one-time passcode</div>
            ) : (
              <div>Sign in with a password</div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
