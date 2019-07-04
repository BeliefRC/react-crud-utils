import React from 'react'
import { Col, Form, Row } from 'antd'
import FieldsFactory from './FieldsFactory'

export default class FormFactory {

  static create (data, form) {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} =form
    return data.map(field => {
      const Field = FieldsFactory.getField(field)
      const {id, label, type, rules, Component, ...props} = Field
      console.log(Field)
      return <Col span={8} key={id}>
        <Form.Item label={label}>
          {getFieldDecorator(id, {
            rules,
          })(<Component {...props} />)}
        </Form.Item>
      </Col>
    })
  }

  static generateForm (data, form) {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = form
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
      <Form onSubmit={()=>{}} {...formItemLayout}>
        <Row gutter={24}>
          {FormFactory.create(data, form)}
        </Row>
      </Form>
    </div>
  }
}
