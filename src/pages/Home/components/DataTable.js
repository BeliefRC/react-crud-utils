import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { Table } from 'antd'

@inject('homeStore')
@observer
export default class DataTable extends Component {
  render () {
    const {homeStore} = this.props
    const {tableList, tableLoading} = homeStore
    const columns = [
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'author_id',
        dataIndex: 'author_id',
        key: 'author_id',
      },
      {
        title: 'tab',
        dataIndex: 'tab',
        key: 'tab',
      },
    ]
    return <Table
      loading={tableLoading}
      dataSource={tableList}
      columns={columns}
      rowKey='id'
    />
  }
}
