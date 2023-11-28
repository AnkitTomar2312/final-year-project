import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";

const questionsData = {
  questions: [
    {
      title: "Reverse a Linked List",
      description:
        "Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.",
      image: "",
    },
    {
      title: "Detect loop in a linked list using Hashing:",
      description:
        "The idea is to insert the nodes in the hashmap and whenever a node is encountered that is already present in the hashmap then return true.Follow the steps below to solve the problem:Traverse the list individually and keep putting the node addresses in a Hash Table.  At anypoint, if NULL is reached then return false If the next of the current nodes points to any of the previously stored nodes in  Hash then return true. ",
      image: "",
    },
    {
      title: "Merge K sorted linked lists ",
      description:
        "Discuss  sorted linked lists of size N each, the task is to merge them all maintaining their sorted order.",
      image: "",
    },
    {
      title: "Remove Nth node from end of the Linked List",
      description:
        "Given a linked list. The task is to remove the Nth node from the end of the linked list",
      image: "",
    },
    {
      title: "Find the middle of a given linked list",
      description:
        "Auxiliary Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3.If there are even nodes, then there would be two middle nodes, we need to print the second middle element.",
      image:
        "For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4.",
    },
    {
      title: "Delete last occurrence of an item from linked list",
      description:
        "Using pointers, loop through the whole list and keep track of the node prior to the node containing the last occurrence key using a special pointer. After this just store the next of next of the special pointer, into to next of special pointer to remove the required node from the linked list.",
      image: "",
    },
    {
      title: "",
      description: "",
      image: "",
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

const App = () => {
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

export default App;
