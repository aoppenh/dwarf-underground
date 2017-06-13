import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import Link1 from './Link1'
import Link2 from './Link2'
import Link3 from './Link3'
import Link4 from './Link4'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="App.css"/>
        <Header />

        <main className="expanded row">
          <Article />
          
          <Ad />

          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <Link1 />
            <Link2 />
            <Link3 />
            <Link4 />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
