import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";

const questionsData = {
  questions: [
    {
      title: "Your Name",
    },
  ],
};

const QuestionsList = ({ questions }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < questions.length - 1 ? prevQuestion + 1 : prevQuestion
    );
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion > 0 ? prevQuestion - 1 : prevQuestion
    );
  };

  return (
    <div
      style={{
        boxShadow:
          "rgba(40, 41, 61, 0.04) 0px 0px 1.19788px, rgba(96, 97, 112, 0.16) 0px 2.39577px 4.79153px",
        borderRadius: "10.2089px",
        width: "100%",
        backgroundColor: "#fff",
        padding: "12px",
        marginTop: "28px",
      }}
    >
      <p
        style={{
          letterSpacing: "-0.02em",
          margin: "40px 16px",
          fontWeight: "700",
          fontSize: "20px",
          color: "#171717",
          textAlign: "center",
        }}
      >
        {questions[currentQuestion].title}
      </p>
      <p
        style={{
          lineHeight: "16px",
          opacity: 0.8,
          fontSize: "14px",
          marginTop: "8px",
          fontWeight: "500",
          marginBottom: "0",
        }}
      >
        {questions[currentQuestion].description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "44px",
          bottom: "88px",
          position: "fixed",
        }}
      >
        <div
          style={
            currentQuestion == 0
              ? {
                  background: "#f3f4f6",
                  boxShadow:
                    "rgba(40, 41, 61, 0.04) 0px 0px 1px, rgba(96, 97, 112, 0.1) 0px 2px 4px",
                  width: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "16x",
                  padding: "0 12px",
                  borderRadius: "6px",
                }
              : {
                  background: "rgb(255, 226, 77)",
                  boxShadow:
                    "rgba(40, 41, 61, 0.04) 0px 0px 1px, rgba(96, 97, 112, 0.1) 0px 2px 4px",
                  width: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "16x",
                  padding: "0 12px",
                  borderRadius: "6px",
                }
          }
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous Question
        </div>
        <div
          style={
            currentQuestion === questions.length - 1
              ? {
                  background: "#f3f4f6",
                  boxShadow:
                    "rgba(40, 41, 61, 0.04) 0px 0px 1px, rgba(96, 97, 112, 0.1) 0px 2px 4px",
                  width: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "16x",
                  padding: "0 12px",
                  borderRadius: "6px",
                }
              : {
                  background: "rgb(255, 226, 77)",
                  boxShadow:
                    "rgba(40, 41, 61, 0.04) 0px 0px 1px, rgba(96, 97, 112, 0.1) 0px 2px 4px",
                  width: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "16x",
                  padding: "0 12px",
                  borderRadius: "6px",
                }
          }
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          Next <br /> Question
        </div>
      </div>
    </div>
  );
};

const Onboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

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
          <div>
            <p
              style={{
                lineHeight: "36px",
                fontFamily: "Bungee",
                paddingTop: "40px",
                marginBottom: "12px",
                fontSize: "30px",
                fontWeight: "700",
                color: "#171717",
                textAlign: "center",
              }}
            >
              Array Questions
            </p>

            <QuestionsList questions={questionsData.questions} />
          </div>
        </section>
      )}
    </HomeLayout>
  );
};

export default Onboarding;
