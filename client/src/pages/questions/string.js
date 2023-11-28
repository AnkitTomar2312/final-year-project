import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";

const questionsData = {
  questions: [
    {
      title: "Check if pair with given Sum exists in Array (Two Sum)",
      description:
        "Given an array A[ ] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x.",
      image: "",
    },
    {
      title: "Best Time to Buy and Sell Stock",
      description:
        "Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Note: Stock must be bought before being sold.",
      image: "",
    },
    {
      title: "Find duplicates in O(n) time and O(1) extra space | Set 1",
      description:
        "Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space. Note: The repeating element should be printed only once. ",
      image: "",
    },
    {
      title: "Product of Array except itself",
      description:
        "Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. ",
      image: "",
    },
    {
      title: "Largest Sum Contiguous Subarray (Kadane’s Algorithm)",
      description:
        "Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. ",
      image: "",
    },
    {
      title: "Maximum Product Subarray",
      description:
        "Given an array that contains both positive and negative integers, the task is to find the product of the maximum product subarray. ",
      image: "",
    },
    {
      title: "Find the Minimum element in a Sorted and Rotated Array",
      description:
        "Given a sorted array arr[] (may be distinct or may contain duplicates) of size N that is rotated at some unknown point, the task is to find the minimum element in it. ",
      image: "",
    },
    {
      title: "Search an element in a sorted and rotated Array",
      description:
        "Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.",
      image: "",
    },
    {
      title: "Trapping Rain Water",
      description:
        "Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.",
      image: "",
    },
    {
      title: "Insert in sorted and non-overlapping interval array",
      description:
        "Given a set of non-overlapping intervals and a new interval, insert the interval at correct position. If the insertion results in overlapping intervals, then merge the overlapping intervals. Assume that the set of non-overlapping intervals is sorted on the basis of start time, to find correct position of insertion.",
      image: "",
    },
    {
      title: "A Boolean Matrix Question",
      description: "Print a given matrix in spiral form",
      image: "",
    },
    {
      title: "Program to find transpose of a matrix",
      description:
        "Given a matrix of size N X M, find the transpose of the matrix Transpose of a matrix is obtained by changing rows to columns and columns to rows. In other words, transpose of A[N][M] is obtained by changing A[i][j] to A[j][i].",
      image: "",
    },
    {
      title: "Search a Word in a 2D Grid of characters (Word Search)",
      description:
        "Given a 2D grid of characters and a single word/an array of words, find all occurrences of the given word/words in the grid. A word can be matched in all 8 directions at any point. Word is said to be found in a direction if all characters match in this direction (not in zig-zag form).The 8 directions are, Horizontally Left, Horizontally Right, Vertically Up, Vertically Down and 4 Diagonal directions.",
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
