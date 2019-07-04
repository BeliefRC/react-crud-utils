import React from 'react'
import { Col, Form, Row } from 'antd'
import FieldsFactory from './FieldsFactory'
import { observable, action, runInAction } from 'mobx'

export default class FormFactory {
  constructor (formData, form) {
    this.formData = formData
    this.form = form
  }

  disabledForm = () => {
    this.formData = this.formData.map(item => {
        item.disabled = true
        return item
      }
    )
  }

  create = () => {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.form
    return this.formData.map(field => {
      const Field = FieldsFactory.getField(field)
      const {id, label, type, rules, Component, ...props} = Field
      return <Col span={8} key={id}>
        <Form.Item label={label}>
          {getFieldDecorator(id, {
            rules,
          })(<Component {...props} />)}
        </Form.Item>
      </Col>
    })
  }

  render = () => {
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    }
    return <div className="generate-form">
      <Form onSubmit={() => {}} {...formItemLayout}>
        <Row gutter={24}>
          {this.create()}
        </Row>
      </Form>
    </div>
  }

}
