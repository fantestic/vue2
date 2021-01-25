<template>
  <div class="container">
    <h1 class="title">Create Scenario</h1>
    <template v-if="!loading">
      <vee-observer v-slot="{ valid }">
        <vee-provider rules="required|alpha_spaces" v-slot="{ errors }">
          <b-field label="Scenario Name" :type="{ 'is-danger': errors[0]}" :message="errors">
            <b-input v-model="readableName"></b-input>
          </b-field>
        </vee-provider>
        <b-button :disabled="!valid" @click="save()" type="is-primary">Create Scenario</b-button>
      </vee-observer>
    </template>
    <b-loading v-model="loading"></b-loading>
  </div>
</template>

<script>
import Scenario from '@/services/Scenario'
import Ui from '@/services/Ui'

export default {
  data: () => ({
    readableName : null,
    saving: false
  }),
  computed: {
    loading() {
      return !this.$store.state.scenario.scenariosAreLoaded
    },
    scenarioId() {
      return Scenario.buildIdFromReadableName(this.readableName, this.$route.params.collectionId)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$store.dispatch('scenario/lazyLoadScenarios', this.$route.params.collectionId)
    },
    async save() {
      try {
        await this.$store.dispatch('scenario/createScenario', {
          id: this.scenarioId,
          steps: {}
        })
        Ui.reportSuccess('Scenario created')
        this.$router.push({ name: 'ScenarioEdit', params: { scenarioId: this.scenarioId }})
      } catch (error) {
        Ui.reportError('Could not create Scenario!', error)
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>