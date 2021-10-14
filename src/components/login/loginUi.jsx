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
                        <div className="Logo">McAfee</div>
                        <div className="Intro">Welcome back to McAfee !</div>
                        <div className="IntroSubHeading">
                            Choose your sign in method to continue.
                        </div>
                    </div>
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
