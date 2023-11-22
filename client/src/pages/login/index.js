import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const checkfield = (e) => {
    e.preventDefault();
    if (field1 === "") {
      setError(true);
    }
    if (field2 === "") {
      setError(true);
    }
    navigate("/home");
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
              {!isRegister
                ? " Welcome back, Please login to your account"
                : " Join our platform 😊"}
            </h4>
          </header>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="input-field animation a3"
              onChange={(e) => {
                setField1(e.target.value);
              }}
            />
            {error && field1 === "" && (
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
                setField1(e.target.value);
              }}
            />
            {error && field1 === "" && (
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
            {!isRegister && (
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
                  field2 === "" && field1 === ""
                    ? { background: "#ffd66d", color: "#171717" }
                    : { background: "#07e9a1" }
                }
                onClick={(e) => {
                  checkfield(e);
                }}
              >
                {isRegister ? "Register" : "Log In"}
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
            }}
            onClick={() => {
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? " Log In" : " Join"}
          </p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Login;
