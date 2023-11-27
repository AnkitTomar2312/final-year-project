import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import { Navigate, useNavigate } from "react-router-dom";
import PYTHONPRAC from "../../assets/images/pythonPrac.jpg";
import PYTHONVID from "../../assets/images/pythonVideo.jpg";
import PYTHONQUES from "../../assets/images/pythonQues.jpg";
const Python = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const content = [
    {
      title: "Practice questions on BackEnd",
      image: PYTHONPRAC,
    },
    {
      title: "Video tutorials on BackEnd",
      image: PYTHONVID,
    },
    {
      title: "Intereview Questions on BackEnd",
      image: PYTHONQUES,
    },
  ];
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
          {content.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: "8px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  marginTop: "18px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p
                  align="center"
                  style={{
                    marginBottom: "0px",
                    fontSize: "22px",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </p>
                <img
                  style={{
                    borderRadius: "4px",
                    marginTop: "8px",
                  }}
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </section>
      )}
    </HomeLayout>
  );
};
export default Python;
