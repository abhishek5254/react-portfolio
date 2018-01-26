// This is the babel way
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Welcome to my Site</h1>
        <Footer/>
      </div>
    )
  }
}
