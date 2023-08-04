import {useState} from "react";

export default function MainRegistration(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "a@a.cz" && password === "a") {
            alert("wowowowowowo")
            setLoginError(false);
          } else {
            setLoginError(true);
          }
    }

    const styles = {backgroundImage: `url(Images/hero.jpg)`, backgroundPosition: "left"};
    return(
        <main className="form--container" style={styles}>
            <div className="login-form--box regi--form">
            <h3>Registration</h3>
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
                    <h4>Username</h4>
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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