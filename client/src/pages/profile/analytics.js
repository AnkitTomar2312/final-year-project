import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Chart from "../../components/chart";
const Analytics = () => {
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
            height: "100vh",
            width: "100%",
          }}
        >
          <p
            style={{
              letterSpacing: "0.01em",
              lineHeight: "24px",
              fontWeight: "700",
              fontSize: "36px",
              marginBottom: "0",
              marginTop: "48px",
              textAlign: "center",
              fontFamily: "Poppins",
            }}
          >
            Your Analysis
          </p>
          <div
            style={{
              marginTop: "48px",
              padding: "5px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow:
                "rgba(40, 41, 61, 0.04) 0px 0px 1.19788px, rgba(96, 97, 112, 0.16) 0px 2.39577px 4.79153px",
            }}
          >
            <Chart />
          </div>
        </section>
      )}
    </HomeLayout>
  );
};

export default Analytics;
