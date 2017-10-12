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
                <Link to="/chronic"><li><img src="https://ooo.0o0.ooo/2017/06/15/59429043a6c00.jpg" /></li></Link>
                <Link to="/cancer"><li><img src="https://ooo.0o0.ooo/2017/06/15/59429043a6c00.jpg" /></li></Link>
            </ul>
        );
    }
}
