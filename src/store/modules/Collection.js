import RepositoryFactory from '@/repositories/RepositoryFactory'

const CollectionRepository = RepositoryFactory.get('collection')

export default {
  namespaced: true,
  state: () => ({
    collections: [],
    collectionsAreLoaded: false
  }),
  actions: {
    async loadCollections ({commit}) {
      commit('setCollectionsAreLoaded', false)
      const collections = await CollectionRepository.getAll()
      commit('setCollectionsAreLoaded', true)
      commit('setCollections', collections)
    },
    async lazyLoadCollections ({state, dispatch}) {
      if (!state.collectionsAreLoaded) {
        await dispatch('loadCollections')
      }
    }
  },
  mutations: {
    setCollections (state, collections) {
      state.collections = collections
    },
    setCollectionsAreLoaded (state, areLoaded) {
      state.collectionsAreLoaded = !!areLoaded
    }
  }
}