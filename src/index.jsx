import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Drawer from './components/Drawer';

import './index.less';

class App extends React.Component {
    render() {
        const items = [{ id: '1' }, { id: 'header' }];
        return (
            <div className="body">

                <Drawer />

            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('example'));
