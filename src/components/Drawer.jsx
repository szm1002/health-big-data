import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Drawer, List, NavBar } from 'antd-mobile';

import Chronic from './Chronic';
import Cancer from './Cancer';
import CancerResult from './CancerResult';

import Main from './Main';

import '../style/drawer.less';

class DrawerNav extends React.Component {
    state = {
        docked: false,
        open: false,
        position: 'left',
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
        // this.setState({ docked: !this.state.docked });
    }
    render() {
        const sidebar = (<List>
            <Link to="/"><List.Item arrow="horizontal" onClick={this.onOpenChange}>首页</List.Item></Link>
            <Link to="/chronic"><List.Item arrow="horizontal" onClick={this.onOpenChange}>慢病预测</List.Item></Link>
            <Link to="/cancer"><List.Item arrow="horizontal" onClick={this.onOpenChange}>癌症筛选</List.Item></Link>
        </List>);

        const drawerProps = {
            docked: this.state.docked,
            open: this.state.open,
            position: this.state.position,
            onOpenChange: this.onOpenChange,
        };

        return (<Router><div className="router">
            <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>健康大数据</NavBar>
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight - 91 }}
                dragHandleStyle={{ display: 'none' }}
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 0 }}
                sidebar={sidebar}
                {...drawerProps}
            >
                <Route path="/" exact component={Main} />
                <Route path="/chronic" component={Chronic} />
                <Route path="/cancer" component={Cancer} />
                <Route path="/cancerresult" component={CancerResult} />
            </Drawer>
        </div></Router>);
    }
}

export default DrawerNav;
