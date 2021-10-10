import React from "react";
import "./style.css";
import quotePic from "./quote.jpg";
import storiesPic from "./stories.jpg";
import jumboPic from "./jumbo-pic.jpg";
import sharePic from "./spread.jpg";
import { Button } from "react-bootstrap";
import PublicNavBar from "../../components/PublicNavBar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <PublicNavBar />
      <div className="section1 full-height">
        <div className="container smile glass">
          <div className="section1-content ">
            <div className="section1-text">
              <h1>Positive+</h1>
              <h2>
                Made for a <br />
                happier world
              </h2>

              <br />
              <Button as={Link} to="/home" className="jumbo-button">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 full-height">
        <div className="container glass section2-content">
          <div className="section2-text">
            <h1>
              Start<br></br>everyday<br></br>
              with<br></br>a<br></br>
              positive<br></br>quote
            </h1>
          </div>
          <div className="section2-pic">
            <img src={quotePic} alt="quotepicture" className="quote-pic"></img>
          </div>
        </div>
      </div>
      <div className="section3 full-height">
        <div className="container glass section3-content">
          <div className="section3-pic">
            <img
              src={storiesPic}
              alt="storiespicture"
              className="stories-pic"
            ></img>
          </div>
          <div className="section3-text">
            <div>
              <h1>Join the Positive+ Network</h1>
              <h1>Share your stories</h1>
              <h1>Listen to others</h1>
            </div>
            <Button as={Link} to="/home" className="jumbo-button">
              Join Positive+
            </Button>
          </div>
        </div>
      </div>
      <div className="section4 full-height">
        <div className="container glass section4-content">
          <div className="section4-text">
            <h1>Spread positive energy to others</h1>
          </div>
          <div className="section4-pic">
            <img src={sharePic} alt="sharepicture" className="share-pic"></img>
          </div>
        </div>
      </div>
      <div className="jumbo full-height">
        <div className="container jumbo-content glass">
          <div className="jumbo-pic-container">
            <img src={jumboPic} alt="calmpicture" className="jumbo-pic"></img>
          </div>
          <div className="jumbo-quote-container">
            <div>
              <h1 className="jumbo-4">Be more positive</h1>
              <h1 className="jumbo-2">Live happier</h1>
            </div>
            <Button as={Link} to="/home" className="jumbo-button">
              Join Positive+
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
