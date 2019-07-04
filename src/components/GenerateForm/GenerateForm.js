import React, { Component, Fragment } from 'react'
import { Row, Col, Form, Icon, Input, Button } from 'antd'
import FieldsFactory from './fieldFactory/FieldsFactory'
import FormFactory from './fieldFactory/FormFactory'

const data = [
  {
    id: 'title',
    label: '标题',
    type: 'input',
    rules: [
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      },
    ],
    disabled: true
  },
  {
    id: 'num',
    label: ' ',
    type: 'inputNumber',
    style: {width: '100%'}
  },
  {
    id: 'content',
    label: '内容',
    type: 'input',
  },
  {
    id: 'time',
    label: '时间',
    type: 'input',
  },
  {
    id: 'creator',
    label: '创建人',
    type: 'input',
  },
  {
    id: 'school',
    label: '学校',
    type: 'search',
  },
  {
    id: 'desc',
    label: '描述',
    type: 'textArea',
  }
]

@Form.create()
export default class GenerateForm extends Component {
  constructor (props) {
    super(props)
    this.formFactory = new FormFactory(data, this.props.form)
  }

  clickBtn = () => {
    this.formFactory.disabledForm()
    this.forceUpdate()
  }

  render () {
    return <div>
      {this.formFactory.render()
      }
      <button onClick={this.clickBtn}>button</button>
    </div>

  }
}
