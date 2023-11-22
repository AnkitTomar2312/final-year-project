import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import DS from "./DS";
import dsa from "../../components/Notess/dsa"

const Notes = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  function createDSA(note){
    return<DS
    key={note.id}
    type={note.type}
    Question={note.Question}
    Link={note.Link}
    Companies={note.Companies}
  />
  }

  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section
          style={{
            paddingTop: "60px",
            backgroundColor: "#f3f4f6",
            height: "100vh",
          }}
        >
          {
            dsa.map(createDSA)
          }
        </section>
      )}
    </HomeLayout>
  );
};

export default Notes;
