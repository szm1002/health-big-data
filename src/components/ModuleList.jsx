import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

import '../style/moduleList.less';

const Item = List.Item;

/*export default class ModuleList extends React.Component {
  render() {
    return (
      <List>
        <Link to="/chronic"><Item multipleline onClick={() => {}} extra="慢病预测"><img src="http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png" /></Item></Link>
        <Link to="/cancer"><Item multipleline onClick={() => {}} extra="癌症筛选"><img src="http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png" /></Item></Link>
      </List>
    );
  }
}*/

export default class extends React.Component {
    render() {
        return (
            <ul>
                <Link to="/chronic"><li><img src="https://img.meituan.net/pay/c8fabae9589e2a15f26beb8c8c4e2307236062.jpg" /></li></Link>
                <Link to="/cancer"><li><img src="https://img.meituan.net/pay/5dababd744232d1b8c5f239e438eca12217199.jpg" /></li></Link>
            </ul>
        );
    }
}
