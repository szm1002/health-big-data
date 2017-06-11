import { NavBar, Icon, Button } from 'antd-mobile';
import DrawerTest from './Drawer';


export default class Misc extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: 30 }}>
        <NavBar
          leftContent="返回" mode="light"
          onLeftClick={() => alert('onLeftClick') }
          rightContent={[
            <Icon key="0" type="retweet" />,
            <Icon key="1" type="search" />,
            <Button key="2" type="primary" inline onClick={(e) => alert(e.toString()) }>Start</Button>
          ]}
        >健康大数据</NavBar>
        <DrawerTest />
      </div>
    );
  }
}
