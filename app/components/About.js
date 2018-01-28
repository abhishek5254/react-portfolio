import React, {Component} from 'react';
var Link = require("react-router-dom").Link;

import Header from './Header';
import Footer from './Footer';

export default class About extends React.Component {
  render() {

    return (
      <div>
        <Header/>
          <img src="./images/pjvalentini.jpg"/><br></br>
          <h1 className="about-me-header">About Me:</h1>
          <h2 className="about-main-text">Hi, I am PJ Valentini. This is my design and web development portfolio. I am currently a student of web development, and I am looking for the opportunity to create high color and vibrant designs for websites, applications and graphic design projects catering to all kinds of companies looking to expand their brand. I am a professional photographer and video editor motivated by strong aesthetics to work on creating your vision.</h2><br></br>
          <p className="twitter-blurb">If you'd like to follow me on Twitter, my username is
          <a class="anchor" href="http://twitter.com/pjdev11">@pjdev11</a>.</p>
        <Footer/>
      </div>
    );
  }
}
