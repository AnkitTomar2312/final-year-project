import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../components/firebase/firebase"

function Login() {

  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        
        // You can use React Router or another navigation method here
        console.log('User is logged in:', user);
      } else {
        // No user is logged in
        console.log('No user is logged in');
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSubmit = async(e) => {

    e.preventDefault();
    if (email && password) {
      try {
        if (login) {
          // User is trying to log in
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          // User is trying to sign up
          await createUserWithEmailAndPassword(auth, email, password);
        }

        // Clear the input fields
        setEmail('');
        setPassword('');
        navigate("/home");
        // Redirect to the home page or another page upon successful login/signup
        // You can use React Router or another navigation method here
        console.log('Successful login/signup');
      } catch (error) {
        // Handle login/signup errors
        console.error('Error:', error.message);
        if(login){
          setLogin(!login)
          setEmail("")
          setPassword("")
        }
        alert('invalid user');
      }
    } else {
      alert('Fill in all data');
      setError(true);
    }
    
    
  };

  return (
    <div className="container">
      <div className="left">
        <div className="login-section">
          <header>
            <h2
              className="animation a1"
              style={{
                fontFamily: "Space Grotesk",
                color: "#171717",
                fontSize: "52px",
                fontWeight: "700",
              }}
            >
              Aupdeshik
            </h2>
            <h4
              className="animation a2"
              style={{
                color: "#171717",
                opacity: "0.5",
                lineHeight: "22px",
                fontSize: "16px",
              }}
            >
              {login
                ? " Welcome back, Please login to your account"
                : " Join our platform 😊"}
            </h4>
          </header>
          <form method="POST">
            <input
              type="email"
              placeholder="Email"
              className="input-field animation a3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {error && email === "" && (
              <p
                style={{
                  lineHeight: "16px",
                  marginTop: "4px",
                  color: "red",
                  fontSize: "12px",
                }}
              >
                Email is required
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="input-field animation a4"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && email === "" && (
              <p
                style={{
                  lineHeight: "16px",
                  marginTop: "4px",
                  color: "red",
                  fontSize: "12px",
                }}
              >
                Password is required
              </p>
            )}
            {login && (
              <p className="animation a5">
                <a href="#" style={{ color: "#171717" }}>
                  Forgot password?
                </a>
              </p>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="animation a6"
                style={
                  password === "" && email === ""
                    ? { background: "#ffd66d", color: "#171717", cursor:"pointer" }
                    : { background: "#07e9a1", cursor:"pointer" }
                }
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                {login ? "Log In" : "Register"}
              </button>
            </div>
          </form>
          <p
            className="animation a6"
            style={{
              color: "#171717",
              textAlign: "center",
              marginTop: "12px",
              textDecoration: "underline",
              cursor:"pointer"
            }}
            onClick={() => {
              setEmail("")
              setPassword("")
              setLogin(!login);
            }}
          >
            {login ? " Join" : " Log In"}
          </p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Login;
