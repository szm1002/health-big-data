import { createForm } from 'rc-form';
import moment from 'moment'; // moment.min ~= 48kb
import { district } from 'antd-mobile-demo-data';

import { Picker, DatePicker, List, Checkbox, Radio, InputItem, Button } from 'antd-mobile';
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
      relativesHighPressure: false,
      alcohol: 1,
      smoking: 1,
      exercise: 1,
      diet: false,
      diabetes: false,
      bloodSugar: false,
      cholesterol: false, // 胆固醇
      triglyceride: false // 甘油三酯
    };
  }

  onChange(key, value) {
    this.setState({
      [key]: value
    });
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
    const alcoholOptions = [
      {label: '不饮', value: 1},
      {label: '适量', value: 2},
      {label: '较多', value: 3}
    ];
    const smokingOptions = [
      {label: '是', value: 1},
      {label: '从不吸烟', value: 2},
      {label: '之前吸，现在已戒', value: 3}
    ];
    const exerciseOptions = [
      {label: '<=2次', value: 1},
      {label: '3-4次', value: 2},
      {label: '>=5次', value: 3}
    ];

    return (<form className="form">
      <List renderHeader={() => <b>基本信息</b>}>
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
      </List>
      <List renderHeader={() => <b>您是否曾被诊断为患高血压？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.selfHighPressure === i.value} onChange={() => this.onChange('selfHighPressure', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您的直系亲属（父母兄弟姐妹）中是否有患高血压？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.relativesHighPressure === i.value} onChange={() => this.onChange('relativesHighPressure', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您每天摄入多少酒精？</b>}>
        {
          alcoholOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.alcohol === i.value} onChange={() => this.onChange('alcohol', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您是否吸烟？</b>}>
        {
          smokingOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.smoking === i.value} onChange={() => this.onChange('smoking', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您每周的锻炼次数？</b>}>
        {
          exerciseOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.exercise === i.value} onChange={() => this.onChange('exercise', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您的日常饮食是否偏咸？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.diet === i.value} onChange={() => this.onChange('diet', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您是否有糖尿病？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.diabetes === i.value} onChange={() => this.onChange('diabetes', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您是否有空腹血糖受损？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.bloodSugar === i.value} onChange={() => this.onChange('bloodSugar', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您的血脂-血胆固醇是否高于5.2mmol/L？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.cholesterol === i.value} onChange={() => this.onChange('cholesterol', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <List renderHeader={() => <b>您的血脂-血甘油三脂是否高于1.7mmol/L？</b>}>
        {
          generalOptions.map(i => (
            <RadioItem key={i.value} checked={this.state.triglyceride === i.value} onChange={() => this.onChange('triglyceride', i.value)}>
              {i.label}
            </RadioItem>
          ))
        }
      </List>
      <section>
        <Button type="primary" inline style={{margin: '0.5rem 0'}} onClick={e => console.log(e)}>提交</Button>
      </section>

    </form>);
  }
};

const TestWrapper = createForm()(Test);
export default TestWrapper;
