import React, { useState, useEffect } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import { useNavigate } from "react-router-dom";
import Splash from "../../components/splash/splash";
import Chat from "../../components/Chat/Chat";
import illus from "../../assets/icons/back-illustration.svg";
import Expert from "../../assets/images/profile-consul.jpg";
import Scolding from "../../assets/images/scolding.png";
import LOGO from "../../assets/images/aupdeshik-logo.jpg";
import Ask from "../../assets/images/ask.png";
import Todo from "../../assets/icons/todo.svg";
import Journal from "../../assets/icons/journal.svg";
import Aim from "../../assets/icons/aim.svg";
import Search from "../../assets/images/search.png";
import Banner from "../../components/banner/banner";
const Index = ({ children }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoader(false);
    }, 4000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <HomeLayout>
      {loader ? (
        <Splash />
      ) : (
        <>
          <Banner />
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
                marginTop: "48px",
                backgroundImage: `url(${illus})`,
                backgroundColor: "#fff",
                boxShadow:
                  "rgba(40, 41, 61, 0.04) 0px 0px 1.12817px, rgba(96, 97, 112, 0.16) 0px 2.25634px 4.51268px",
                paddingBottom: "62vw",
                paddingTop: "30px",
                borderRadius: "8px",
                height: "532px",
              }}
              onClick={() => {
                navigate("/profile");
              }}
            >
              <p
                style={{
                  fontFamily: "Bungee",
                  letterSpacing: "-0.01em",
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "0",
                }}
              >
                hi, ankit
              </p>
              <p
                style={{
                  marginTop: "8px",
                  lineHeight: "18px",
                  opacity: "0.3",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom: "0px",
                }}
              >
                this is your current profile
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    border: "1px solid hsla(0,0%,9%,.13)",
                    marginTop: "24px",
                    padding: "8px",
                    borderRadius: "8px  ",
                  }}
                >
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src={Expert}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "14px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "0",
                    backgroundColor: "#fff",
                    fontFamily: "Space Grotesk",
                    padding: "14px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "12px",
                    border: " 1px solid rgba(23, 23, 23, 0.13)",
                    width: "60%",
                  }}
                >
                  you are <span style={{ color: "#f76152" }}> 0% </span>
                  consistent
                </p>
              </div>

              <img
                style={{ width: "100%", marginTop: "22px" }}
                src={Scolding}
              />
            </div>
            <div
              style={{
                backgroundColor: "#17AD7D",
                marginTop: "28px",
                borderRadius: "8px",
                padding: "40px 0 0 0 ",
              }}
            >
              <p
                style={{
                  marginBottom: "0",
                  fontSize: "28px",
                  letterSpacing: "-0.27px",
                  lineHeight: "30px",
                  fontFamily: "Bungee",
                  fontWeight: "400",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                no concern <br /> is too small, <br /> ask an expert!
              </p>
              <p
                style={{
                  marginBottom: "0",
                  fontFamily: "Space Grotesk",
                  lineHeight: "18px",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                24/7 support from our trusted experts
              </p>
              <p
                style={{
                  marginBottom: "0",
                  fontFamily: "Space Grotesk",
                  lineHeight: "18px",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                100% money back guarantee!
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "32px",
                }}
                onClick={() => navigate("/askAvet")}
              >
                <p
                  style={{
                    width: "67%",
                    textAlign: "center",
                    background: "rgb(255, 255, 255)",
                    boxShadow:
                      "rgba(96, 97, 112, 0.1) 0px 2px 4px 0px, rgba(40, 41, 61, 0.04) 0px 0px 1px 0px",
                    padding: "10px 24px",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "0",
                    borderRadius: "8px",
                    marginTop: "38px",
                  }}
                  onClick={() => {
                    navigate("/chat");
                  }}
                >
                  ask an expert
                </p>
              </div>
              <img style={{ width: "100%", marginTop: "24px" }} src={Ask} />
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "40px 0",
                marginTop: "28px",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  color: "#171717",
                  fontFamily: "Bungee",
                  letterSpacing: "-0.01em",
                  lineHeight: "30px",
                  fontWeight: "400",
                  fontSize: "26px",
                  textAlign: "center",
                }}
              >
                A DAILY CHECK
              </p>
              <p
                style={{
                  lineHeight: "16px",
                  opacity: "0.8",
                  fontSize: "14px",
                  marginTop: "8px",
                  textAlign: "center",
                  fontWeight: "500",
                  marginBottom: "0",
                }}
              >
                routines to follow, records to keep, <br /> a digital journal
                for all the memories
              </p>
              <div
                style={{
                  gap: "14px",
                  marginTop: "28px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 12px",
                }}
              >
                <div
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onClick={() => navigate("/goals")}
                >
                  <p
                    style={{
                      lineHeight: "16px",
                      fontWeight: "600",
                      fontSize: "16px",
                      padding: "16px 8px 0 8px",
                      textAlign: "center",
                      marginBottom: "0",
                    }}
                  >
                    daily
                  </p>

                  <img src={Todo} alt="" width="100%" />
                </div>
                <div
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onClick={() => navigate("/notes")}
                >
                  <p
                    style={{
                      lineHeight: "16px",
                      fontWeight: "600",
                      fontSize: "16px",
                      padding: "16px 8px 0 8px",
                      textAlign: "center",
                      marginBottom: "0",
                    }}
                  >
                    Aim
                  </p>
                  <img src={Aim} alt="" width="100%" />
                </div>
                <div
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: "0.5",
                  }}
                >
                  <p
                    style={{
                      lineHeight: "16px",
                      fontWeight: "600",
                      fontSize: "16px",
                      padding: "16px 8px 0 8px",
                      textAlign: "center",
                      marginBottom: "0",
                    }}
                  >
                    journal
                  </p>
                  <img src={Journal} alt="" width="100%" />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#CEC2EE",
                padding: "24px 0 0 0",
                marginTop: "28px",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "center",
                  marginBottom: "8px",
                  color: "#171717",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                Search and find <br /> a solution to your problem!!
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "58px",
                }}
              >
                <p
                  style={{
                    width: "67%",
                    textAlign: "center",
                    background: "rgb(255, 255, 255)",
                    boxShadow:
                      "rgba(96, 97, 112, 0.1) 0px 2px 4px 0px, rgba(40, 41, 61, 0.04) 0px 0px 1px 0px",
                    padding: "10px 24px",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "0",
                    borderRadius: "8px",
                    marginTop: "3px",
                  }}
                  onClick={() => {
                    navigate("/chat");
                  }}
                >
                  try search
                </p>
              </div>
              <img style={{ width: "100%", marginTop: "8px" }} src={Search} />
            </div>
          </section>
          <img style={{ width: "100%", borderRadius: "8px" }} src={LOGO} />
        </>
      )}
    </HomeLayout>
  );
};

export default Index;
//  <Chat />
