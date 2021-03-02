import RepositoryFactory from '@/repositories/RepositoryFactory'

const ActionRepository = RepositoryFactory.get('action')

export default {
  namespaced: true,
  state: () => ({
    actions: [],
    actionsAreLoaded: false
  }),
  actions: {
    async loadActions ({commit}) {
      commit('setActionsAreLoaded', false)
      const actions = await ActionRepository.getAll()
      commit('setActions', actions)
      commit('setActionsAreLoaded', true)
    },
    async lazyLoadActions({dispatch, state}) {
      if (!state.actionsLoaded) {
        await dispatch('loadActions')
      }
    }
  },
  mutations: {
    setActions (state, actions) {
      state.actions = actions
    },
    setActionsAreLoaded(state, areLoaded) {
      state.actionsAreLoaded = !!areLoaded
    }
  }
}