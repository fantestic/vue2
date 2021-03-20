import RepositoryFactory from '@/repositories/RepositoryFactory'
import _ from 'lodash'

const CollectionRepository = RepositoryFactory.get('collection')

export default {
  namespaced: true,
  state: () => ({
    scenariosAreLoaded: false,
    scenarios: [],
    activeCollection: null
  }),
  actions: {
    async loadScenarios ({commit}, collectionId) {
      commit('setScenariosAreLoaded', false)
      const scenarios = await CollectionRepository.getScenariosForCollection(collectionId)
      commit('setScenariosAreLoaded', true)
      commit('setScenarios', scenarios)
      commit('setActiveCollection', collectionId)
    },
    async lazyLoadScenarios ({state, dispatch}, collectionId) {
      if (state.activeCollection !== collectionId) {
        await dispatch('loadScenarios', collectionId)
      }
    },
    async updateScenario ({commit}, payload) {
      await CollectionRepository.updateScenario(
        _.cloneDeep(payload.scenario)
      )
      commit('updateScenario', payload.scenario)
    },
    async createScenario ({commit}, payload) {
      await CollectionRepository.createScenario(payload)
      commit('addScenario', payload)
    }
  },
  mutations: {
    setScenarios (state, scenarios) {
      state.scenarios = scenarios
    },
    addScenario (state, scenario) {
      state.scenarios.push(scenario)
    },
    updateScenario (state, scenario) {
      const index = _.findIndex(state.scenarios, el => el.id === scenario.id)
      state.scenarios[index] = _.cloneDeep(scenario)
    },
    setActiveCollection (state, collectionId) {
      state.activeCollection = collectionId
    },
    setScenariosAreLoaded (state, areLoaded) {
      state.scenariosAreLoaded = !!areLoaded
    }
  }
}