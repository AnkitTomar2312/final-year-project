import React, { useState, useEffect } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Chat from "../../components/Chat/Chat";

const Index = ({ children }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoader(false);
    }, 4000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once on mount

  return <HomeLayout>{loader ? <Splash /> : <Chat />}</HomeLayout>;
};

export default Index;
