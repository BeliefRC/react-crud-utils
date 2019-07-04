import InputFactory from './InputFactory'
import InputNumberFactory from './InputNumberFactory'

const fieldMap = new Map([
  ['input', InputFactory],
  ['search', InputFactory],
  ['textArea', InputFactory],
  ['inputNumber', InputNumberFactory],
])
export default class FieldsFactory {

  static getField (field) {
    const FieldFactory= fieldMap.get(field.type)
    if (FieldFactory){
      return new FieldFactory(field)
    }else {
      throw new Error(`type : ${field.type} is not  exist!`)
    }
  }
}
