import React from "react";
import loader from "../../assets/images/splash.gif";
const splash = () => {
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        width: "100vw",
        height: "100vh",
        zIndex: "999",
        position: "absolute",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "160px" }} src={loader} alt="" />
      </div>
    </div>
  );
};

export default splash;
