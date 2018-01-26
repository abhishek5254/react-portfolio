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
          <h2 className="about-main-text">Im a Capricorn, and I love the Eagles!</h2>
          <p>If you'd like to follow me on Twitter, my username is
          <a class="anchor" href="http://twitter.com/pjdev11">@pjdev11</a>.</p>
        <Footer/>
      </div>
    );
  }
}
