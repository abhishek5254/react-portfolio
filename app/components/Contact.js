// Include React
import React, {Component} from 'react';
var Link = require("react-router-dom").Link;

import Header from './Header';
import Footer from './Footer';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div class="wrapper">
            <h3 className="text-center">General Information</h3>
            <p className="job-description">What I do:</p>
            <p className="my-languages">HTML, CSS, Javascript, JQuery, Node.js, React, PostgreSQL</p>
              <ul class="work-roster">
                <li>Website and Application Development.</li>
                <li>Logo Design and Brand Support.</li>
                <li>Graphic Design</li>
                <li class="prodphoto"><a href="http://www.pjvalentini.com">Product Photography</a></li>
              </ul>
            <p className="bottom-blurb">I am currently looking for new web developlment and design work in the NYC area or remotely. If you have any develpoment needs, please don't hesitate to contact me!</p>
            <p className="bottom-blurb">You can reach me by phone, email, or by my twitter or facebook account.</p>
          </div>
          <div>
            <h3 className="text-center">Contact Details</h3>
              <ul class="contact-info">
                <li class="phone"><a href="tel:646-831-8260">646-831-8260</a></li>
                <li class="mail"><a href="mailto:pj.valentini@gmail.com">pj.valentini@gmail.com</a></li>
                <li class="twitter"><a href="http://twitter.com/pjdev11">@pjdev11</a></li>
              </ul>
          </div>
				<Footer/>
	     </div>
    );
  }
}
