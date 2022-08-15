import React, { useState,} from "react";
import Loading from "../../components/loading";

export default function LoginPage(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const userLogin = (e) => {
        e.preventDefault();
        if(username === "")
            return alert("Please fill the user name")
        if(password === "")
            return alert("Please fill the password");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        
    }

    return (
        <div>
            { loading === true ? <Loading /> : null }
            <div className="login-panel">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={handleUsernameChange} value={username} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={handlePassword} value={password} />
                    </div>
                    <div className="form-group">
                        <button onClick={userLogin}>Login</button>  
                    </div>
                </form>
            </div>
        </div>
    );
}