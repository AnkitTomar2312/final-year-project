import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import DSA from "../../assets/images/DSA.jpeg";
import Frontend from "../../assets/images/Frontend.png";
import Backend from "../../assets/images/backend.jpeg";
import Python from "../../assets/images/python.jpeg";
const Notes = () => {
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
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                height: "200px",
                width: "auto",
                backgroundColor: "#FFF",
                backgroundImage: `url(${DSA})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/dsa")}
            ></div>
            <div
              style={{
                height: "200px",
                width: "auto",
                backgroundColor: "#FFF",
                backgroundImage: `url(${Frontend})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/frontend")}
            ></div>
            <div
              style={{
                height: "200px",
                width: "auto",
                backgroundColor: "#FFF",
                backgroundImage: `url(${Backend})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/backend")}
            ></div>
            <div
              style={{
                height: "200px",
                width: "auto",
                backgroundColor: "#FFF",
                backgroundImage: `url(${Python})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/python")}
            ></div>
          </div>
        </section>
      )}
    </HomeLayout>
  );
};

export default Notes;
