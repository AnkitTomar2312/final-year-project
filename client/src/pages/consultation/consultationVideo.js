import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";

const Consultation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [additional, setAdditional] = useState("");
  const [question, setQuestion] = useState([]);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.warn(email, Contact, date, additional);
  };
  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section
          style={{
            padding: "60px 24px 100px 24px",
            backgroundColor: "#f3f4f6",
            height: "auto",
            width: "100%",
          }}
        >
          <form onSubmit={handelSubmit}>
            <div style={{ marginTop: "24px" }}>
              <p style={{ textAlign: "left", fontFamily: "Bungee" }}>
                Enter Email:-
              </p>
              <input
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "0",
                  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
                onFocus={(e) => (e.target.style.outline = "2px solid #007bff")}
                onBlur={(e) => (e.target.style.outline = "none")}
                type="email"
                placeholder="eg ...abc@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div style={{ marginTop: "24px" }}>
              <p style={{ textAlign: "left", fontFamily: "Bungee" }}>
                Enter Contact Number:-
              </p>
              <input
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "0",
                  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
                onFocus={(e) => (e.target.style.outline = "2px solid #007bff")}
                onBlur={(e) => (e.target.style.outline = "none")}
                type="number"
                placeholder="eg..1444-4569-5896"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                value={Contact}
              />
            </div>
            <div style={{ marginTop: "24px" }}>
              <p style={{ textAlign: "left", fontFamily: "Bungee" }}>
                Select Date:-
              </p>
              <input
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "0",
                  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
                onFocus={(e) => (e.target.style.outline = "2px solid #007bff")}
                onBlur={(e) => (e.target.style.outline = "none")}
                type="date"
                placeholder="eg ...abc@gmail.com"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>
            <div style={{ marginTop: "24px" }}>
              <p style={{ textAlign: "left", fontFamily: "Bungee" }}>
                Any Additional Information:-
              </p>
              <textarea
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "0",
                  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
                  height: "200px",
                  width: "100%",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
                onFocus={(e) => (e.target.style.outline = "2px solid #007bff")}
                onBlur={(e) => (e.target.style.outline = "none")}
                type="email"
                placeholder=""
                onChange={(e) => {
                  setAdditional(e.target.value);
                }}
                value={additional}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "18px",
                }}
              >
                <input
                  style={{
                    width: "70%",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#f76152",
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#fff",
                    border: "0",
                    opacity: "0.5",
                  }}
                  type="submit"
                  value="Save Changes"
                />
              </div>
            </div>
          </form>
        </section>
      )}
    </HomeLayout>
  );
};

export default Consultation;
