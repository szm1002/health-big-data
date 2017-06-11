import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

const Item = List.Item;

export default class ModuleList extends React.Component {
  render() {
    return (
      <List>
        <Link to="/chronic"><Item multipleline onClick={() => {}} extra="慢病预测"><img src="http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png" /></Item></Link>
        <Link to="/cancer"><Item multipleline onClick={() => {}} extra="癌症筛选"><img src="http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png" /></Item></Link>
      </List>
    );
  }
}
