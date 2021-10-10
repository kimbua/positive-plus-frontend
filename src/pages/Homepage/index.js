import React from "react";
import "./style.css";
import PublicNavBar from "../../components/PublicNavBar";
import quotePic from "./quotePic.jpg";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const HomePage = () => {
  return (
    <div className="homePage">
      <PublicNavBar />
      <div className="home1 full-height">
        <div className="container home1-content glass">
          <div className="quoteContainer">
            <img src={quotePic} alt="quote" className="quote" />
          </div>
          <div className="textContainer glass">
            <h1>"Slow motion is better than no motion"</h1>
            <h2>You are doing great. Keep on going.</h2>
            <div className="inner-glass"></div>
          </div>
          <div className="buttons">
            <EmailShareButton>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
