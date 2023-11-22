import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
const Goals = () => {
  const [loading, setLoading] = useState(true);
  const dummmyTask = [
    "Wake up at 5am",
    "Read 2 article of newspaper",
    "Practice 20 DSA problems",
    "Complete Noun",
    "Do evening worship",
  ];
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section style={{ marginTop: "80px", padding: "0 24px 0px 24px" }}>
          <p style={{ fontSize: "38px", fontWeight: "500" }}>Today tasks:-</p>
          {dummmyTask.map((item, id) => {
            return (
              <div
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  margin: "16px 0px 16px 0",
                  borderRadius: "8px",
                }}
              >
                <input
                  type="checkbox"
                  style={{ height: "28px", width: "28px", marginRight: "8px" }}
                />
                <p
                  style={{
                    fontSize: "26px",
                    lineHeight: "36px",
                    marginBottom: "0",
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
          <input
            style={{
              width: "88%",
              height: "60px",
              border: "0",
              position: "absolute",
              bottom: "100px",
              padding: "14px",
              fontSize: "38px",
            }}
            type="text"
          />
        </section>
      )}
    </HomeLayout>
  );
};

export default Goals;
