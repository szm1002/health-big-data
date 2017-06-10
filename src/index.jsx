import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainPage from './components/mainPage';
import NavMenuTest from './components/navMenuTest';
// import ChronicPage from './components/chronicPage';
// import CancerPage from './components/cancerPage';

// import 'antd-mobile/lib/button/style/index.css';
// import Button from 'antd-mobile/lib/button';
// import 'antd-mobile/lib/list-view/style/index.css';
// import ListView from 'antd-mobile/lib/list-view';

// import Misc from './components/Misc';
// import Carousel from './components/Carousel';
// import Form from './components/Form';
// import RefreshControl from './components/RefreshControl';
// import Modal from './components/Modal';
// import Popup from './components/Popup';

import './index.less';

/*const App = React.createClass({
  render() {
    const items = [{id: '1'}, {id: 'header'}];
    return (<div className="container" id="container">
      <div className="body">
        <Misc />
        <Carousel />
        <Modal /> <Popup />
        <Form /> <hr />
        <RefreshControl /> <hr />
      </div>
      <div className="fixed-bottom">底部固定条</div>
    </div>);
  }
})*/

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <NavMenuTest />
          </header>
          <main>
            <Route exact path="/" component={MainPage} />
          </main>
        </div>
      </Router>
    );
  }
};

// class App extends React.Component {
//   render() {
//     return (
//         <div>
//           Hello root.
//         </div>
//     );
//   }
// };

ReactDOM.render(<App />, document.getElementById('app'));
