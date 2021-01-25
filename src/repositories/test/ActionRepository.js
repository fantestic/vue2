import actions from './actions/all.js'


export default {
  getAll() {
    return new Promise(function (resolve) {
      resolve(actions)
    });
  }
}