import React from "react";
import Header from "../components/Header/Header.js";
import Row from "../components/Row";
import Container from "../components/Container";
import Maxs_Profile_Pic from "../components/Images/Maxs_Profile_Pic.jpg";
import JavaScriptPic from "../components/Images/JavaScriptPic.png";
// import Footer from '../components/Footer'

function AboutMe() {
  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-center mt-3">About Me</h1>
        <Row>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img className="img-thumbnail" src={Maxs_Profile_Pic} />
          </div>
          <div className="col-md-7 p">
            <Row>
              <div className="col-md-12">
                <Row>
                  <div className="col-md-12 mt-2">
                    <p>
                      My name is Maximillian Cartwright. In my professional
                      career, I have worked in many different types of
                      businesses. One of my favorite jobs was working at Sonic
                      Drive-In franchises. I really enjoyed travelling to new
                      places and training new crews to be prepared for opening
                      new stores. One of my least favorite jobs was in the
                      kitchen of a restaurant. My boss at the kitchen was very
                      stubborn and the hours were terrible!
                    </p>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-12">
                    <p>
                      My favorite color is blue. My favorite band is Atmosphere.
                      My hobbies are playing video games, baking, hiking, and
                      fishing. My first daughter is almost a year old. When I'm
                      not working and studying I really enjoy quality family
                      time.
                    </p>
                  </div>
                </Row>
                <Row className="d-flex flex-xl-wrap bg-light">
                  <div className="col-md-12 p-0 m-0 text-center" >
                    <h2 id="favoriteLanguages" className="text-center">
                      My Favorite Language
                    </h2>
                    <img className="img-thumbnail mt-2" src={JavaScriptPic} />
                  </div>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
      {/* {Footer} */}
    </div>
  );
}

export default AboutMe;
