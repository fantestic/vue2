import Vue from 'vue'
import Vuex from 'vuex'
import ActionModule from './modules/Action'
import CollectionModule from './modules/Collection'
import ScenarioModule from './modules/Scenario'
import ScenarioEditor from './modules/ScenarioEditor'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    action: ActionModule,
    collection: CollectionModule,
    scenario: ScenarioModule,
    scenario_editor: ScenarioEditor
  }
})
