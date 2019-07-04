import { InputNumber } from 'antd'
import FieldAbstract from './FieldAbstract.js'

export default class InputNumberFactory extends FieldAbstract {
  constructor (field) {
    super(field)
    this.Component = InputNumber
  }
}
