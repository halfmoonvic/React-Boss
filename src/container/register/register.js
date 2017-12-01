import React from 'react'
import Logo from 'component/logo/logo'
import { Redirect } from 'react-router-dom'
// eslint-disable-next-line
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

import imoocForm from '../../component/imooc-form/imooc-form'

@connect(
  state => state.user,
  {register}
)
@imoocForm
class Register extends React.Component{
  constructor(props) {
    super(props)
    // this.state = {
    //   type: 'genius' // 或者 boss
    // }

    this.handleRegister = this.handleRegister.bind(this)
  }
  // handleChange(key, val) {
  //   this.setState({
  //     [key]: val
  //   })
  // }
  componentDidMount() {
    this.props.handleChange('type', 'genius')
  }
  handleRegister() {
    this.props.register(this.props.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return(
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
        <List>
          <InputItem onChange={v=>this.props.handleChange('user', v)}>用户名</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v=>this.props.handleChange('pwd', v)}>密码</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v=>this.props.handleChange('repeatpwd', v)}>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.props.state.type==='genius'}
            onChange={()=>this.props.handleChange('type', 'genius')}
            >牛人</RadioItem>
          <WhiteSpace />
          <RadioItem
            checked={this.props.state.type==='boss'}
            onChange={()=>this.props.handleChange('type', 'boss')}
          >boss</RadioItem>
        </List>
        <Button type='primary' onClick={this.handleRegister}>注册</Button>
      </div>
    )
  }
}

export default Register
