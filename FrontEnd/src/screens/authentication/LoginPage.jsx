import React, { useState, useEffect } from "react";

export default function LoginPage(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {

    };

    const handlePassword = (e) => {

    };

    return (
        <div>
            <div className="login-panel">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={handleUsernameChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                </form>
            </div>
        </div>
    );
}