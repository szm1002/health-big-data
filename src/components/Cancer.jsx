import { List, InputItem, Button } from 'antd-mobile';

class Cancer extends React.Component {
    state = {
        name: '',
        id: '000000113082859704'
    }
    render() {
        return (<div>
            <List renderHeader={() => '癌症筛选'}>
                <InputItem clear placeholder="请输入您的姓名" value={this.state.name}
                    onChange={val => { this.setState({ name: val }) }}>
                    姓名
        </InputItem>
                <InputItem clear placeholder="请输入您的编号" value={this.state.id} defaultValue={this.state.id} type="number"
                    onChange={val => { this.setState({ id: val }) }}>
                    编号
        </InputItem>
            </List>
            <section>
                <Button type="primary" inline style={{ margin: '0.5rem 0' }} onClick={e => console.log(e)}>提交</Button>
            </section>
        </div>);
    }
}

export default Cancer;
