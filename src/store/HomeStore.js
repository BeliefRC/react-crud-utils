import { observable, action, runInAction } from 'mobx'
import request from '../utils/request'

export default class HomeStore {
  @observable.ref
  tableList = []
  @observable
  tableLoading = false

  @action.bound
  async getTableList () {
    this.startLoading()
    const res = await request.get('/topics')
    runInAction(() => {
      this.tableList = res?.data || []
      this.endLoading()
    })
  }

  @action.bound
  startLoading (cb) {
    this.tableLoading = true
    cb && cb()
  }

  @action.bound
  endLoading (cb) {
    this.tableLoading = false
    cb && cb()
  }
}
