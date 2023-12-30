import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";

const Consultation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [doubt, setDoubt] = useState("");
  const [question, setQuestion] = useState([]);
  const [response, setResponse] = useState("");
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (doubt.trim() !== "") {
      setQuestion([...question, doubt.trim()]);
      setDoubt("");
    }
    setTimeout(() => {
      setResponse(
        "Thank you for reaching out! We appreciate your inquiry. Our team will review your request, and we'll get back to you as soon as possible. Your patience is highly valued. If you have any further questions or urgent matters, feel free to contact us directly. We look forward to assisting you!"
      );
    }, [3000]);
  };

  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section
          style={{
            padding: "80px 24px 100px 24px",
            backgroundColor: "#f3f4f6",
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            {question.map((q, index) => (
              <div key={index}>
                <p
                  style={{
                    position: "relative",
                    padding: "12px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    margin: "12px 0",
                    overflowWrap: "break-word",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {q}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderLeft: "10px solid transparent",
                      borderBottom: "10px solid #07e9a1",
                      borderRight: "10px solid #07e9a1",
                    }}
                  ></span>
                </p>
                <p
                  style={{
                    position: "relative",
                    padding: "12px",
                    backgroundColor: "#a9cdf9",
                    borderRadius: "4px",
                    margin: "12px 0",
                    overflowWrap: "break-word",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#fff",
                    letterSpacing: "1px",
                    lineHeight: "24px",
                    textAlign: "center",
                  }}
                  key={index}
                >
                  {" "}
                  {response}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderLeft: "10px solid transparent",
                      borderBottom: "10px solid #ffd66d",
                      borderRight: "10px solid #ffd66d",
                      rotate: "180deg",
                    }}
                  ></span>
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handelSubmit}>
            <div
              style={{
                position: "fixed",
                bottom: 80,
                left: 0,
                width: "100%",
                padding: " 8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <input
                style={{
                  width: "100%",
                  padding: "24px",
                  borderRadius: "8px",
                  border: "0",
                  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
                }}
                onFocus={(e) => (e.target.style.outline = "2px solid #007bff")}
                onBlur={(e) => (e.target.style.outline = "none")}
                type="text"
                placeholder="Type Your Doubt...."
                onChange={(e) => {
                  setDoubt(e.target.value);
                }}
                value={doubt}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#f76152",
                  padding: "22px 4px",
                  borderRadius: "4px",
                  fontWeight: "500",
                }}
              >
                Ask?
              </button>
            </div>
          </form>
        </section>
      )}
    </HomeLayout>
  );
};

export default Consultation;
