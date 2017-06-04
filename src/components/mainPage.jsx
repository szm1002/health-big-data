import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav.jsx';
import Slider from './slider.jsx';
import Module from './module.jsx';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container" id="container">
        <div className="body">
          <Nav />
          <Slider />
          <Module />
          Hello World!
        </div>
      </div>
    );
  }
};

export default MainPage;
