import React from "react";
import Header from "../components/Header/Header.js";
import Row from "../components/Row";
import Container from "../components/Container";
import Maxs_Profile_Pic from "../components/Images/Maxs_Profile_Pic.jpg";
import JavaScriptPic from "../components/Images/JavaScriptPic.png";
import cPic from "../components/Images/cPic.png";
import ResumeButton from "../components/ResumeButton";
// import Footer from '../components/Footer'

function AboutMe() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <div className="col-md-5 p-0 ml-0">
            <h1 className="text-left py-3">About Me</h1>
            <img className="img-thumbnail text-left" src={Maxs_Profile_Pic} />
          </div>
          <div className="col-md-1 p-0 ml-0"></div>
          <div className="col-md-6">
            <Row>
              <div className="col-md-12">
                <Row>
                  <div className="col-md-12 mt-5 pt-5">
                    <p>
                      Hello world! My name is Maximillian Cartwright. I grew up
                      with an awareness that technology was evolving around me
                      and continuously impacting my daily life. I acquired a
                      passion for technology and programming through my
                      professional experience in technical support. I attended a
                      full-stack web devlopment bootcamp which provided the
                      skills necessary to continue learning more on my own!
                    </p>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-12">
                    <p>
                      In my career I have utilized problem solving skills and
                      the ability to present ideas to empower individuals in
                      small businesses and corporations. I like to dig deep and
                      work with others to adapt to new challenges.
                    </p>
                  </div>
                </Row>
                <Row className="d-flex flex-xl-wrap mt-3 pt-1">
                  <div
                    className="col-md-12 px-0 pb-3 m-0 text-center h-50"
                    id="favoriteLanguageBg"
                  >
                    <h4 id="favoriteLanguages" className="text-center pb-1">
                      My Favorite Languages
                    </h4>
                    <img
                      id="jsLogo"
                      className="img-thumbnail mt-2 mr-5"
                      src={JavaScriptPic}
                    />
                    <img
                      id="cLogo"
                      className="img-thumbnail mt-2 ml-5"
                      src={cPic}
                    />
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
