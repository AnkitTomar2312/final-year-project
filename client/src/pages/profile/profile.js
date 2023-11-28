import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Expert from "../../assets/images/profile-consul.jpg";
const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
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
            paddingTop: "90px",
            backgroundColor: "#f3f4f6",
            paddingBottom: "90px",
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
                Er.
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
                Frontend
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
                25 years experience
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
          <div>
            <div
              style={{
                marginTop: "24px",
                padding: "0 24px",
                backgroundColor: "#f3f4f6",
              }}
            >
              <p
                style={{
                  lineHeight: "26px",
                  marginBottom: "0",
                  fontSize: "26px",
                  fontWeight: "700",
                  paddingTop: "24px",
                }}
              >
                Offering
              </p>
              {offering.map((item, id) => {
                return (
                  <div
                    key={id}
                    style={{
                      textAlign: "start",
                      marginTop: "18px",
                      backgroundColor: "#fff",
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        marginBottom: "0px",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}:-
                    </p>
                    <p
                      style={{
                        opacity: "0.8",
                        fontSize: "18px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        marginTop: "8px",
                      }}
                    >
                      {item.description}
                    </p>
                    <div style={{ display: "flex", marginTop: "18px" }}>
                      <p
                        style={{
                          lineHeight: "18px",
                          flex: "0.6",
                          marginBottom: "0px",
                          marginTop: "8px",
                          fontFamily: "monotype corsiva",
                          fontSize: "26px",
                        }}
                      >
                        at Rs {item.price}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          flex: "0.4",
                          fontSize: "16px",
                          borderRadius: "8px",
                          backgroundColor: "#171717",
                          color: "#fff",
                          padding: "10px 14px 10px 14px",
                        }}
                        onClick={() => navigate("/askAvet")}
                      >
                        {item.cta}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
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
