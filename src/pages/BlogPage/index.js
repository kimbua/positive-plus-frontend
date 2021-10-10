import React, { useState, useEffect } from "react";
import "./style.css";
import PublicNavBar from "../../components/PublicNavBar";
import { useDispatch, useSelector } from "react-redux";
import postActions from "../../redux/actions/post.action";

const BlogPage = () => {
  return (
    <div className="blogPage">
      <PublicNavBar />
      <div className="stories">
        <div className="full-height container">
          <div className="single-story">
            <div className="left-section glassmor">
              <img src="https://picsum.photos/600" alt="" />
              <div className="inner-glassmor"></div>
            </div>
            <div className="right-section">
              <div className="cotent-section glassmor">
                <div className="story-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec fringilla neque, vel vehicula diam. Mauris sem
                    nulla, tempus vel consectetur sit amet, condimentum at ex.
                    Donec a semper purus. Etiam cursus mi at semper malesuada.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Ut nec est consectetur, tempus lectus nec,
                    accumsan ipsum. Praesent aliquam, augue a ornare volutpat,
                    nibh metus fermentum nunc, id posuere arcu orci eget arcu.
                    Duis vel libero erat. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                    Quisque quis dolor dui. Sed aliquam lectus ac metus pretium
                    rutrum.
                  </p>
                </div>
                <div className="inner-glassmor"></div>
              </div>
              <div className="comment-section glassmor">
                <div className="inner-glassmor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
