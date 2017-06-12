import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import 'antd-mobile/lib/button/style/index.css';
// import Button from 'antd-mobile/lib/button';
// import 'antd-mobile/lib/list-view/style/index.css';
// import ListView from 'antd-mobile/lib/list-view';

import Misc from './components/Misc';
import Carousel from './components/Carousel';
import Form from './components/Form';
import RefreshControl from './components/RefreshControl';
import Modal from './components/Modal';
import Popup from './components/Popup';

import Drawer from './components/Drawer';

import './index.less';

class App extends React.Component {
  render() {
    const items = [{id: '1'}, {id: 'header'}];
    return (
      <div className="container" id="container">
      <div className="body">

        <Drawer />

      </div>

    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('example'));
