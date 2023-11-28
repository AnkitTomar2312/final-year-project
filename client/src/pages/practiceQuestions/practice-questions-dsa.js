import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Arrow from "../../assets/icons/arrow.svg";
const PracticeQuestions = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const Topics = ["Arrays", "Strings", "Linked List"];
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const dsapush = (i) => {
    if (i === 0) {
      navigate("/dsa/practice-questions/arrays");
    }
    if (i === 1) {
      navigate("/dsa/practice-questions/strings");
    }
    if (i === 2) {
      navigate("/dsa/practice-questions/linkedList");
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
            backgroundColor: "#f3f4f6",
            height: "auto",
            width: "100%",
          }}
        >
          {Topics.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  boxShadow:
                    "rgba(40, 41, 61, 0.04) 0px 0px 1.19788px, rgba(96, 97, 112, 0.16) 0px 2.39577px 4.79153px",
                  borderRadius: "10.2089px",
                  width: "100%",
                  backgroundColor: "#fff",
                  padding: "12px",
                  marginTop: "28px",
                }}
                onClick={() => {
                  dsapush(index);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      letterSpacing: "0.01em",
                      lineHeight: "24px",
                      fontWeight: "700",
                      fontSize: "20px",
                      marginBottom: "0",
                    }}
                  >
                    {item}
                  </p>
                  <img style={{ rotate: "180deg" }} src={Arrow} alt="hh" />
                </div>
              </div>
            );
          })}
        </section>
      )}
    </HomeLayout>
  );
};

export default PracticeQuestions;
