<template>
  <div class="container">
    <h1 class="title">Create Collection</h1>
    <template v-if="!loading">
      <vee-observer v-slot="{ valid }">
        <vee-provider rules="required|alpha" v-slot="{ errors }">
          <b-field
            label="Collection Name"
            :type="{ 'is-danger': errors[0] }"
            :message="errors"
          >
            <b-input v-model="readableName"></b-input>
          </b-field>
        </vee-provider>
        <b-button :disabled="!valid" @click="save()" type="is-primary">Create Collection</b-button>
      </vee-observer>
    </template>
    <b-loading v-model="loading"></b-loading>
  </div>
</template>

<script>
import Ui from '@/services/Ui'

export default {
  data: () => ({
    readableName: null,
    saving: false
  }),
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$store.dispatch('collection/lazyLoadCollections')
    },
    async save() {
      try {
        await this.$store.dispatch('collection/createCollection', {
          id: this.readableName
        })
        this.$router.push({ name: 'ScenarioCreate', params: { collectionId: this.readableName }})
      } catch (error) {
        Ui.reportError('Could not create Collection!', error)
      }
    }
  },
  computed: {
    loading() {
        return !this.$store.state.collection.collectionsAreLoaded
    },
    
  }
}
</script>