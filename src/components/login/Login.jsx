import React from "react";
import "./style.css";

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
                <div className="InputLabel">Email Address</div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={LoginForm.email}
                    placeholder="johndoe@domain.com"
                    className="Input"
                    onChange={onChange}
                    style={{
                        border:
                            LoginError.isEmailError === true
                                ? "2px solid red"
                                : LoginError.isEmailError === false
                                ? "2px solid green"
                                : "",
                    }}
                />
                {LoginError.email && (
                    <div className="Error">{LoginError.email}</div>
                )}
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
                        <input
                            id="otp"
                            name="otp"
                            className="Input"
                            onChange={onChange}
                        />
                    </>
                )}
                {!Continue && (
                    <button className="RequestOtp" onClick={onPressContinue}>
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
