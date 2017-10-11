import { Modal, Button, Toast, Card, WhiteSpace, WingBlank, List } from 'antd-mobile';

const Item = List.Item;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            riskTip: '',
            bmi: ''
        };
        this.showModal = this.showModal.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    showModal(tip, bmi) {
        this.setState({
            visible: true,
            riskTip: tip,
            bmi: bmi
        });
    }

    onClose() {
        this.setState({
            visible: false,
        });
    }

    onSubmit(data) {
        console.log(data);
        if (!data.age) {
            Toast.fail('年龄不能为空！', 1);
            return;
        }
        if (!data.height) {
            Toast.fail('身高不能为空！', 1);
            return;
        }
        if (!data.weight) {
            Toast.fail('体重不能为空！', 1);
            return;
        }

        const myInit = {
            body: JSON.stringify(data),
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-requested-with': 'XMLHttpRequest' }
        };

        fetch('/chronic/getrisk', myInit).then(response => {
            console.log('response', response);
            return response.json();
        }).then(data => {
            console.log('responseData', data);
            this.showModal(data.riskTip, data.bmi);
        }).catch(err => {
            console.log('err', err);
            Toast.offline('oOps, 网络出错了，请稍后再试!', 2);
        });
    }

    render() {
        return (
            <div>
                <Button
                    type="primary"
                    inline
                    style={{ margin: '0.5rem 0' }}
                    onClick={() => { this.onSubmit(this.props.data) }}
                >
                    提交
                </Button>
                <Modal
                    title="高血压风险预测"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    style={{height: 'auto', position: 'fixed', bottom: '0', maxHeight: '100%'}}
                >
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="您的高血压风险预测结果为"
                                extra={
                                    <span style={{color: 'red', width: '20px'}}>
                                        {this.state.riskTip}
                                    </span>
                                }
                            />
                            <Card.Body>
                                <div>基于您填写的问卷，我们发现您高血压患病的风险因素有如下几项：</div>
                                <List>
                                    <Item 
                                        wrap
                                        style={{
                                            display: (this.state.bmi >= 24) && (this.state.bmi < 28) ? 'block' : 'none'
                                        }}
                                    >
                                        您的体型偏胖
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.state.bmi >= 28 ? 'block' : 'none'
                                        }}
                                    >
                                        您的体型较肥胖
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.alcohol === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您每天的饮酒量过多
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.diet === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您每天摄入的盐分可能偏高
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.exercise === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您每周的锻炼次数偏少
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.smoking === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        吸烟
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.relativesHighPressure === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您有高血压患病家族史
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.diabetes === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您患有糖尿病
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.bloodSugar === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您的血糖代谢存在异常
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.cholesterol === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您的胆固醇较高
                                    </Item>
                                    <Item 
                                        wrap
                                        style={{
                                            display: this.props.data.triglyceride === 1 ? 'block' : 'none'
                                        }}
                                    >
                                        您的甘油三酯较高
                                    </Item>
                                </List>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </Modal>
            </div>
        );
    }
};
