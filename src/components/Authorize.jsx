/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AccountContext } from "../providers/AccountContext";

const Authorize = () => {
    const { isAuthenticated, storeUserData, AuthenticateUser, webAuth } =
        useContext(AccountContext);

    const parseAuthToken = () => {
        if (window.location.hash) {
            webAuth.parseHash({ hash: window.location.hash }, (err, res) => {
                if (err) {
                    console.log(err);
                    localStorage.clear();
                    return;
                }

                const { email, name, picture, sub: id } = res.idTokenPayload;
                storeUserData({ email, name, picture, id });
                AuthenticateUser(res.idToken);
            });
        }
    };
    useEffect(() => {
        parseAuthToken();
    }, []);

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }
    return <div>Loading....</div>;
};

export default Authorize;
