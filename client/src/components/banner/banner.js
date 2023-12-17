import React, { useEffect, useState } from "react";
import "./banner.css";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showBanner && (
        <div className="banner">
          <div
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>Your Banner Content</p>
            <button onClick={() => setShowBanner(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
