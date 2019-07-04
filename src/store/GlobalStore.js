import { observable, action, runInAction } from 'mobx'

export default class GlobalStore {
  @observable
  language = 'ZH-CN'

  @action.bound
  changeLanguage (language) {
    this.language = language
  }
}
