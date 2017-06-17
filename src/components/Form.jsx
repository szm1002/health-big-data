import { createForm } from 'rc-form';
import moment from 'moment'; // moment.min ~= 48kb
import { district } from 'antd-mobile-demo-data';

import { Picker, DatePicker, List, Checkbox, Radio, InputItem } from 'antd-mobile';
// import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

// import AsyncPicker from './Picker';

const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;
const Item = List.Item;

// 如果不是使用 List.Item 作为 children
/*const CustomChildren = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem' }}
    >
      {props.children}
      <span style={{ float: 'right' }}>{props.extra}</span>
    </div>
  );
};*/

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ['male'],
      age: '',
      height: '',
      weight: '',
      selfHighPressure: false,
      relativesHighPressure: false
    };
  }

  render() {
    const { getFieldProps } = this.props.form;
    // const { gender } = this.state;
    const genderOptions = [
      {label: '男', value: 'male'},
      {label: '女', value: 'female'},
    ];
    const generalOptions = [
      {label: '是', value: true},
      {label: '否', value: false}
    ];

    return (<form className="form">
      <List renderHeader={() => <b>慢病风险分析问卷</b>}>
        <Picker
          data={genderOptions}
          cols={1}
          title="选择性别"
          value={this.state.gender}
          onChange={v => {this.setState({gender: v})}}>
          <Item arrow="horizontal" onClick={() => {}}>您的性别:</Item>
        </Picker>
        <InputItem
          type="number"
          {...getFieldProps('age', {
            rules: [
              {required: true, message: '请输入您的年龄'},
            ]
          })}
          onChange={v => this.setState({age: v})}
          clear
          placeholder="请输入您的年龄"
          extra="岁">
          您的年龄：
        </InputItem>
        <InputItem
          type="number"
          {...getFieldProps('height', {
            rules: [
              {required: true, message: '请输入您的身高'},
            ]
          })}
          onChange={v => this.setState({height: v})}
          clear
          placeholder="请输入您的身高"
          extra="cm">
          您的身高：
        </InputItem>
        <InputItem
          type="number"
          {...getFieldProps('weight', {
            rules: [
              {required: true, message: '请输入您的体重'},
            ]
          })}
          onChange={v => this.setState({weight: v})}
          clear
          placeholder="请输入您的体重"
          extra="kg">
          您的体重：
        </InputItem>
        <Picker
          data={generalOptions}
          cols={1}
          title="高血压"
          value={this.state.selfHighPressure}
          onChange={v => {this.setState({selfHighPressure: v})}}>
          <Item arrow="horizontal" onClick={() => {}}>您是否曾被诊断为患高血压</Item>
        </Picker>
        <Picker
          data={generalOptions}
          cols={1}
          title="高血压"
          value={this.state.relativesHighPressure}
          onChange={v => {this.setState({relativesHighPressure: v})}}>
          <Item arrow="horizontal" onClick={() => {}}>您的直系亲属是否患有高血压</Item>
        </Picker>

      </List>

    </form>);
  }
};

const TestWrapper = createForm()(Test);
export default TestWrapper;
