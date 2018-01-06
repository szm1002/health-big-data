
import { List, InputItem, Button, Toast } from 'antd-mobile';
import healthData from '../../public/assets/health-data';

class Cancer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            uid: '000000113082859704'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.objectToQuery = this.objectToQuery.bind(this);
    }

    objectToQuery(obj) {
        if (!obj) {
            return '';
        }
        return '?' + Object.keys(obj).map(function (key) {
            return key + '=' + encodeURIComponent(obj[key] === void 0 ? '' : obj[key]);
        }).join('&');
    }

    onSubmit(data) {
        console.log(data);
        if (!data.uid) {
            Toast.fail('体检号不能为空！', 1);
            return;
        }

        const existedData = healthData;
        const hasData = existedData.hasOwnProperty(data.uid);
        if (!hasData) {
            Toast.fail('该用户暂无体检数据，请重新输入体检编号', 3);
            return;
        }

        const myInit = {
            method: 'GET',
            headers: { 'x-requested-with': 'XMLHttpRequest' }
        };
        
        fetch('/cancer/getcancer' + this.objectToQuery(data), myInit).then(response => {
            console.log('response', response);
            return response.json();
        }).then(data => {
            console.log('responseData', data);
            this.props.history.push('/cancerresult', data);
        }).catch(err => {
            console.log('err', err);
            Toast.offline('oOps, 网络出错了，请稍后再试!', 2);
        });
    }

    render() {
        return (<div>
            <List renderHeader={() => '癌症筛选'}>
                <InputItem 
                    clear 
                    placeholder="请输入您的姓名" 
                    value={this.state.name}
                    onChange={val => { this.setState({ name: val }) }}
                >
                    姓名
                </InputItem>
                <InputItem 
                    clear
                    placeholder="请输入您的编号"
                    value={this.state.uid}
                    defaultValue={this.state.uid}
                    type="number"
                    onChange={val => { this.setState({ uid: val }) }}
                >
                    编号
                </InputItem>
            </List>
            <section style={{marginTop: '20px'}}>
                示例编号: 
                <div>000200114110760021</div>
                <div>000300114022247474</div>
            </section>
            <section>
                <Button 
                    type="primary" 
                    inline 
                    style={{ margin: '0.5rem 0' }} 
                    onClick={() => this.onSubmit(this.state)}
                >
                    提交
                </Button>
            </section>
        </div>);
    }
}

export default Cancer;
