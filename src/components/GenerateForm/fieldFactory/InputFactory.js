import { Input } from 'antd'
import FieldAbstract from './FieldAbstract.js'
import InputNumberFactory from './InputNumberFactory'

const {Search,TextArea} = Input
const InputMap = new Map([
  ['input', Input],
  ['search', Search],
  ['textArea', TextArea],
])
export default class InputFactory extends FieldAbstract {
  constructor (field) {
    super(field)
    this.Component = InputMap.get(field.type)
  }
}
