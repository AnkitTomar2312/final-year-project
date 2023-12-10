import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import { Navigate, useNavigate } from "react-router-dom";
import Ask from "../../assets/images/ask.png";
import Search from "../../assets/images/search.png";
import Popup from "../../components/popup/popup";
import LOGO from "../../assets/images/aupdeshik-logo.jpg";
const AskAvet = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
            padding: "60px 24px 70px 24px",
            backgroundColor: "#f3f4f6",
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(206, 194, 238)",
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
                color: "#171717",
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
                color: "#171717",
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
                color: "#171717",
                fontWeight: "600",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              100% money back guarantee!
            </p>
            <p
              style={{
                marginBottom: "0",
                textAlign: "center",
                fontWeight: "600",
                fontFamily: "Space GrOtesk",
                color: "#171717",
                fontSize: "14px",
                marginTop: "24px",
              }}
            ></p>
            <img style={{ width: "100%", marginTop: "24px" }} src={Ask} />
          </div>

          <div
            style={{
              backgroundColor: "#07e9a1",
              marginTop: "28px",
              borderRadius: "8px",
              padding: "40px 8px 0px 8px ",
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
              Explore our services
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
              Pariatur adipisicing esse quis officia aute Lorem ut commodo
              veniam laborum laborum.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "38px",
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
                onClick={openPopup}
              >
                Text Consultation
              </p>
            </div>
            <div
              style={{
                marginTop: "38px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                onClick={openPopup}
              >
                Video Consultation
              </p>
            </div>
            <img style={{ width: "100%", marginTop: "24px" }} src={Search} />
          </div>
          <div>
            <Popup isOpen={isPopupOpen} onClose={closePopup}>
              <p
                style={{
                  marginBottom: "0",
                  fontSize: "28px",
                  letterSpacing: "-0.27px",
                  lineHeight: "30px",
                  fontFamily: "Bungee",
                  fontWeight: "400",
                  color: "#171717",
                  textAlign: "center",
                }}
              >
                Audio and video Consultation
              </p>
              <p
                style={{
                  marginBottom: "0",
                  fontFamily: "Space Grotesk",
                  lineHeight: "18px",
                  color: "#171717",
                  fontWeight: "600",
                  fontSize: "16px",
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
                  color: "#171717",
                  fontWeight: "600",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                Id voluptate dolor ipsum amet ut sit exercitation exercitation
                veniam irure ex officia tempor. Enim nisi non occaecat sunt
                laboris eiusmod aliquip laboris excepteur velit aliqua. Fugiat
                labore anim consectetur minim officia commodo enim sunt officia
                ex enim velit enim. Et culpa in occaecat minim proident id
                commodo. Aliqua nostrud officia ullamco laboris nisi commodo.
                <br />
                Id voluptate dolor ipsum amet ut sit exercitation exercitation
                veniam irure ex officia tempor. Enim nisi non occaecat sunt
                laboris eiusmod aliquip laboris excepteur velit aliqua. Fugiat
                labore anim consectetur minim officia commodo enim sunt officia
                ex enim velit enim. Et culpa in occaecat minim proident id
                commodo. Aliqua nostrud officia ullamco laboris nisi commodo.
              </p>
            </Popup>

            {/* The rest of your app content */}
          </div>
        </section>
      )}
      <img style={{ width: "100%", borderRadius: "8px" }} src={LOGO} />
    </HomeLayout>
  );
};

export default AskAvet;
