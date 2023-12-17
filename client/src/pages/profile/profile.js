import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Expert from "../../assets/images/profile-consul.jpg";
import { auth } from "../../components/firebase/firebase";
import Arrow from "../../assets/icons/arrow.svg";
const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      await auth.signOut();

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const analysis = ["your progress", "your analytics", "suggestions by AI"];
  const offering = [
    {
      id: 1,
      title: "Ask a Vet",
      description:
        "You can ask me any question about a single issue you are facing regarding your specialization field",
      price: "129",
      cta: "Ask",
    },
  ];

  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section
          style={{
            padding: "90px 24px",
            backgroundColor: "#f3f4f6",
<<<<<<< HEAD
            paddingBottom: "90px",
=======
>>>>>>> 20b81edb748bb9397c3aa4c073657b281221b826
            fontFamily: "poppins",
          }}
        >
          <div style={{ zIndex: "10", paddingTop: "32px" }}>
            <div style={{ textAlign: "center" }}>
              <img
                style={{ height: "100%", width: "232px", borderRadius: "6px" }}
                src={Expert}
                alt=""
              />
              <p
                style={{
                  lineHeight: "30px",
                  marginBottom: "0",
                  fontSize: "30px",
                  marginTop: "16px",
                  fontWeight: "600",
                }}
              >
                Name
              </p>
              <p
                style={{
                  lineHeight: "16px",
                  marginBottom: "0",
                  fontSize: "16px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                field
              </p>
              <p
                className="mb-0  font-16 font-regular"
                style={{
                  lineHeight: "16px",
                  marginTop: "4px",
                  marginBottom: "0",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                member since
              </p>

              <div
                style={{
                  gap: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "16px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFF",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      lineHeight: "16px",
                      marginBottom: "0px",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    -
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "12px",
                      opacity: "0.6",
                      marginBlock: "0px",
                      marginTop: "8px",
                      fontFamily: "500",
                    }}
                  >
                    Ratings
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#FFF",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    className="mb-0 font-16 font-medium"
                    style={{
                      lineHeight: "16px",
                      marginBlock: "0",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    -
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "12px",
                      opacity: "0.6",
                      marginBottom: "0px",
                      marginTop: "8px",
                      fontWeight: "500",
                    }}
                  >
                    found them helpful
                  </p>
                </div>
              </div>
            </div>
          </div>
          {analysis.map((item, index) => {
            return (
              <div
                key={index}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      letterSpacing: "0.01em",
                      lineHeight: "24px",
                      fontWeight: "700",
                      fontSize: "20px",
                      marginBottom: "0",
                    }}
                  >
                    {item}
                  </p>
                  <img style={{ rotate: "180deg" }} src={Arrow} alt="hh" />
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
            }}
          >
            <p
              style={{
                padding: "8px 14px",
                backgroundColor: "#f76152",
                color: "#fff",
                width: "45%",
                textAlign: "center",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Log Out
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
            }}
          >
            <p
              style={{
                padding: "8px 14px",
                backgroundColor: "#f76152",
                color: "#fff",
                width: "45%",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Log Out
            </p>
          </div>
        </section>
      )}
    </HomeLayout>
  );
};

export default Profile;
