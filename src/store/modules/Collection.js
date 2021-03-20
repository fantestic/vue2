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
    async removeCollection ({commit}, collectionId) {
      await CollectionRepository.removeCollection(collectionId)
      commit('removeCollection', collectionId)
    },
    async lazyLoadCollections ({state, dispatch}) {
      if (!state.collectionsAreLoaded) {
        await dispatch('loadCollections')
      }
    },
    async createCollection ({commit}, collection) {
      await CollectionRepository.createCollection(collection)
      commit('addCollection', collection)
    }
  },
  mutations: {
    setCollections (state, collections) {
      state.collections = collections
    },
    setCollectionsAreLoaded (state, areLoaded) {
      state.collectionsAreLoaded = !!areLoaded
    },
    removeCollection(state, collectionId) {
      state.collections = state.collections.filter(collection => collection.id !== collectionId)
    },
    addCollection(state, collection) {
      state.collections.push(collection)
    }
  }
}