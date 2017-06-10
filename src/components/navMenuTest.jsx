import React from 'react';
import ReactDOM from 'react-dom';

// import '../style/navMenu.less';

// import { Drawer, List, NavBar } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';



class NavMenuTest extends React.Component {
  /*state = {
    open: false,
    position: 'left',
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }*/
  render() {
    // const sidebar = (<List>
    //   {[...Array(20).keys()].map((i, index) => {
    //     if (index === 0) {
    //       return (<List.Item key={index}
    //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //         multipleLine
    //       >Category</List.Item>);
    //     }
    //     return (<List.Item key={index}
    //       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //     >Category{index}</List.Item>);
    //   })}
    // </List>);

    // const drawerProps = {
    //   open: this.state.open,
    //   position: this.state.position,
    //   onOpenChange: this.onOpenChange,
    // };
    return (<div>
        <NavBar leftContent="back"
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
      </div>);
  }
}

export default NavMenuTest;
