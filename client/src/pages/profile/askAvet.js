import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import { Navigate, useNavigate } from "react-router-dom";
const AskAvet = () => {
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
          Ask a vet
        </section>
      )}
    </HomeLayout>
  );
};

export default AskAvet;
