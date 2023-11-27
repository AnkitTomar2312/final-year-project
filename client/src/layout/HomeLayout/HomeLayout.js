import React from "react";
import MobileBottomNav from "../../components/MobileBottomNav/MobileBottomNav";
import appLogo from "../../assets/icons/app-logo.svg";
const HomeLayout = ({ children }) => {
  return (
    <>
      <div>
        <div
          style={{
            background: "#07e9a1",
            height: "60px",
            width: "100%",
            borderRadius: "0px 0px 10px 10px",
            position: "fixed",
            top: "0",
            zIndex: "100",
          }}
        >
          <p
            align="center"
            style={{
              marginBottom: "0px",
              fontSize: "48px",
              fontFamily: "Bungee",
              fontWeight: "600",
            }}
          >
            Aupdeshik
          </p>
          {/* <img style={{ width: "50px", height: "50px" }} src={appLogo} /> */}
        </div>
      </div>
      {children}
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <MobileBottomNav />
      </div>
    </>
  );
};

export default HomeLayout;
