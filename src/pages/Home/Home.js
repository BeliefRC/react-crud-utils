import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import DataTable from './components/DataTable'
import OperateBar from './components/OperateBar'
@inject('homeStore')
@observer
export default class Home extends Component {
  componentDidMount () {
    this.props.homeStore.getTableList()
  }

  render () {
    return <div>
      <OperateBar/>
      <DataTable />
    </div>
  }
}
