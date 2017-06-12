import Carousel from '../components/Carousel';
import ModuleList from '../components/ModuleList';

import '../style/main.less';

export default class extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Carousel />
        <ModuleList />
      </div>
    );
  }
}
