import React, { useState } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import Expert from "../../assets/images/Rectangle24379.png";
import "./Profile.css"

const Profiles = () => {

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
      {loading ? (<Splash />) : (
        <section className="mainProf">
          <div className="first">
            <div className="leftt">
              <img src={Expert} alt="imagess" />
              <div className="lefttPart">
                <div className="left1">
                  <h3 className="head">Er.</h3>
                  <i><p className="det">Frontend</p></i>
                </div>
                <div className="left2">
                  <p className="ratings">Ratings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="secondd">
            <i><p className="detailss">Details</p></i>
            <div className="bott">
              <p className="exp">25+ Years Experience</p>
            </div>
            <div className="secDet">
              <p className="decs">We found Them helpful</p>
            </div>
          </div>
          <div className="offH"><h4>---Offerings---</h4></div>
          {offering.map((item, id) => {
            return (

              <div className="offering" key={id}>

                <div className="offers">
                  <div className="ol">
                    <div className="imgg">U</div>
                  </div>

                  <div className="or">
                    <div className="orf">
                      <b><p>{item.title}</p></b>
                      <p>{item.description}</p>
                    </div>

                    <div className="ors">
                      <p>at Rs {item.price} <br />
                      <u>know more</u>
                      </p>
                      <p>{item.cta}</p>
                    </div>

                  </div>

                </div>
              </div>
            )
          })}
        </section>
      )}
    </HomeLayout>
  )
}
/* <div key={id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <div>
                  <p>at Rs {item.price} <br />{" "}
                  <u>know more</u>
                  </p>
                  <p>{item.cta}</p>
                </div>
              </div> */

export default Profiles