import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  useEffect(() => {
    if (name && email && password) {
      setAllFieldsFilled(false);
    }
  });

  const sendData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      alert("successfull");
    } else {
      alert("not succesfull");
    }
  };
  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section
          style={{
            padding: "60px 24px 100px 24px",

            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              marginTop: "20vh",
              justifyContent: "center",
              alignItem: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              style={{
                padding: "18px",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Poppins",
                border: "2px solid #fff",
                padding: "18px",
                transition: "border-color 0.3s ease",
                outline: "none",
                borderRadius: "8px",
                background: "#f3f4f6",
              }}
              type="text"
              placeholder="name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#fff")}
            />
            <input
              style={{
                padding: "18px",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Poppins",
                border: "2px solid #fff",
                padding: "18px",
                transition: "border-color 0.3s ease",
                outline: "none",
                borderRadius: "8px",
                background: "#f3f4f6",
              }}
              type="text"
              placeholder="email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#fff")}
            />
            <input
              style={{
                padding: "18px",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Poppins",
                border: "2px solid #fff",
                padding: "18px",
                transition: "border-color 0.3s ease",
                outline: "none",
                borderRadius: "8px",
                background: "#f3f4f6",
              }}
              type="passwrord"
              placeholder="password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#fff")}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "48px",
              }}
            >
              <button
                style={
                  name && password && email !== ""
                    ? {
                        background: "#07e9a1",
                        width: "60%",
                        padding: "12px ",
                        borderRadius: "4px",
                        border: "0",
                        fontSize: "18px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        color: "#fff",
                      }
                    : {
                        background: "#ffd66d",
                        width: "60%",
                        padding: "12px ",
                        borderRadius: "4px",
                        border: "0",
                        fontSize: "18px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                      }
                }
                onClick={() => {
                  sendData();
                }}
                disabled={allFieldsFilled}
              >
                Register
              </button>
            </div>
          </div>
        </section>
      )}
    </HomeLayout>
  );
};

export default Login;
