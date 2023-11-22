import React from "react";
import Loader from "../../assets/images/launcher.gif";

const LoaderComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Loader})`,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000000",
        zIndex: "1000",
        position: "absolute",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "294%",
      }}
    ></div>
  );
};

export default LoaderComponent;
