import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Todo from "../../components/todo/index";
import Splash from "../../components/splash/splash";
const Goals = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return <HomeLayout>{loading ? <Splash /> : <Todo />}</HomeLayout>;
};

export default Goals;
