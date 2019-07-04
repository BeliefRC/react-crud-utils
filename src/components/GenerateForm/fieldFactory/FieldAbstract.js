export default class FieldAbstract {
  constructor (
    {
      id,
      type,
      disabled = false,
      isRequired,
      label,
      style,
      onChange = function () {},
      ...props
    }
  ) {
    if (!id || !type) throw new Error(`id and type is required`)
    this.id = id
    this.type = type
    this.label = label
    this.style = style
    this.disabled = disabled
    this.onChange = onChange
    Object.keys(props).map(key => {
      this[key] = props[key]
    })
  }
}
