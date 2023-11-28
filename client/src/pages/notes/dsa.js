import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import { Navigate, useNavigate } from "react-router-dom";
import DSASELF from "../../assets/images/dsa-self.png";
import DSAVID from "../../assets/images/dsaVideo.png";
import DSAQUE from "../../assets/images/dsaQues.jpg";
const Dsa = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const content = [
    {
      title: "Practice questions on DSA",
      image: DSASELF,
    },
    {
      title: "Video tutorials on DSA",
      image: DSAVID,
    },
    {
      title: "Intereview Questions on DSA",
      image: DSAQUE,
    },
  ];
  const routerPush = (i) => {
    if (i === 0) {
      navigate("/dsa/practice-questions");
    }
    if (i === 1) {
      navigate("/dsa/tutorials");
    }
    if (i === 2) {
      navigate("/dsa/interview-questions");
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
                onClick={() => {
                  routerPush(index);
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
export default Dsa;
