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
            height: "auto",
            width: "100%",
          }}
        >
          <Chart />
        </section>
      )}
    </HomeLayout>
  );
};

export default Analytics;
