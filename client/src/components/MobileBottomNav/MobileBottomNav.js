import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../imageImport/importIcons";

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const navIcon = ["home.svg", "notes.svg", "goals.svg", "profile.svg"];
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem !== null) {
      if (selectedItem === "notes.svg") {
        navigate("/notes");
      } else if (selectedItem === "goals.svg") {
        navigate("/goals");
      } else if (selectedItem === "profile.svg") {
        navigate("/profile");
      } else if (selectedItem === "home.svg") {
        navigate("/");
      }
    }
  }, [navigate, selectedItem]);

  const routeSwitch = (item) => {
    setSelectedItem(item);
  };

  return (
    <div
      style={{
        background: "#fff",
        height: "70px",
        bottom: "0",
        width: "100%",
        position: "absolute",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navIcon.map((item, index) => {
          return (
            <img
              key={index}
              style={{
                width: "48px",
                marginTop: "12px",
                padding: "8px",
                background: item === selectedItem ? "#e3e3e3" : "transparent",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              src={icons[item]}
              onClick={() => {
                routeSwitch(item);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
