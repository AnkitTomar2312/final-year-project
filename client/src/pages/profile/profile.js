import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Expert from "../../assets/images/Rectangle24379.png";
const Profile = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const offering = [
    {
      id: 1,
      title: "Ask a Vet",
      description:
        "You can ask me any question about a single issue you are facing with your dog or any other concerns you may have",
      price: "129",
      cta: "Ask",
    },
    {
      id: 2,
      title: "Chat with me",
      description:
        "You can ask me any question about a single issue you are facing with your dog or any other concerns you may have",
      price: "199",
      cta: "Chat Now",
    },
    {
      id: 2,
      title: "Video Connect",
      description:
        "You can ask me any question about a single issue you are facing with your dog or any other concerns you may have",
      price: "399",
      cta: "Book Now",
    },
  ];

  const rating = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus vitae odio lacus in odio congue . Lorem ipsum dolor sit...",
      ownername: "John",
      petname: "Shaw's",
      time: "1",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus vitae odio lacus in odio congue . Lorem ipsum dolor sit...",
      ownername: "John",
      petname: "Shaw's",
      time: "1",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus vitae odio lacus in odio congue . Lorem ipsum dolor sit...",
      ownername: "John",
      petname: "Shaw's",
      time: "1",
    },
  ];
  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : (
        <section style={{ paddingTop: "58px", backgroundColor: "#f3f4f6" }}>
          <div className="pt-32  " style={{ zIndex: "10" }}>
            <div className="" style={{ textAlign: "center" }}>
              <img
                className="radius-6"
                style={{ height: "100%", width: "232px" }}
                src={Expert}
                alt=""
              />
              <p
                className="mb-0 font-30 mt-16 font-semi "
                style={{ lineHeight: "30px" }}
              >
                Er.
              </p>
              <p
                className="mb-0 mt-10 font-16 font-regular"
                style={{ lineHeight: "16px" }}
              >
                Frontend
              </p>
              <p
                className="mb-0  font-16 font-regular"
                style={{ lineHeight: "16px", marginTop: "4px" }}
              >
                25 years experience
              </p>

              <div
                className="d-flex justify-content-center mt-16 pb-24"
                style={{ gap: "10px" }}
              >
                <div
                  className="px-16 py-16 radius-8"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  <p
                    className="mb-0 font-16 font-medium"
                    style={{ lineHeight: "16px" }}
                  >
                    -
                  </p>
                  <p
                    className="mb-0 mt-8 font-medium"
                    style={{
                      fontSize: "13px",
                      lineHeight: "12px",
                      opacity: "0.5",
                    }}
                  >
                    Ratings
                  </p>
                </div>
                <div
                  className="px-16 py-16 radius-8"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  <p
                    className="mb-0 font-16 font-medium"
                    style={{ lineHeight: "16px" }}
                  >
                    -
                  </p>
                  <p
                    className="mb-0 mt-8 font-medium"
                    style={{
                      fontSize: "13px",
                      lineHeight: "12px",
                      opacity: "0.5",
                    }}
                  >
                    found them helpful
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                marginTop: "24px",
                padding: "0 24px",
                backgroundColor: "#f3f4f6",
              }}
            >
              <p
                style={{
                  lineHeight: "26px",
                  marginBottom: "0",
                  fontSize: "20px",
                  fontWeight: "600",
                  paddingTop: "24px",
                }}
              >
                Offerings
              </p>
              {offering.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="px-16 py-24 bg-white radius-12 mt-16"
                    style={{ textAlign: "start" }}
                  >
                    <p className="mb-0 font-20 font-semi">{item.title}</p>
                    <p
                      className="mb-0 font-12 mt-8 font-medium "
                      style={{ opacity: "0.5" }}
                    >
                      {item.description}
                    </p>
                    <div className="mt-24 d-flex">
                      <p
                        className="mb- font-14 font-semi"
                        style={{ lineHeight: "18px", flex: "0.6" }}
                      >
                        at Rs {item.price} <br />{" "}
                        <u style={{ opacity: "0.5" }}>know more</u>
                      </p>
                      <p
                        className="font-16 font-semi px-14 py-10 radius-8 bg-black font-white"
                        style={{ textAlign: "center", flex: "0.4" }}
                      >
                        {item.cta}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </HomeLayout>
  );
};

export default Profile;
