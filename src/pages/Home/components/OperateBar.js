import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import GenerateForm from '../../../components/GenerateForm/GenerateForm'

@inject('homeStore')
@observer
export default class OperateBar extends Component {
  componentDidMount () {
  }

  render () {
    return <div>
<GenerateForm/>
    </div>
  }
}
