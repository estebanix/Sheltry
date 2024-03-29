import {useState, useContext } from "react";
import { Context } from "../Context/Context";

export default function MainLogin(){
    const {setLoggedIn} = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "a@a.cz" && password === "a") {
            setLoggedIn(true);
            setLoginError(false);
          } else {
            setLoginError(true);
          }
    }

    const styles = {backgroundImage: `url(Images/login.jpg)`};

    return(
        <main className="form--container" style={styles}>
            <div className="login-form--box">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="login--minibox">
                    <h4>Email</h4>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login--minibox">
                    <h4>Password</h4>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {loginError && <p className="error-message">Invalid email or password</p>}
                <button className="form--btn" type="submit">Log in</button>
            </form> 
            </div>
        </main>
    );
}