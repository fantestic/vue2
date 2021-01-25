<template>
  <div class="container">
    <h1 class="title">{{ makeScenarioReadable(this.$route.params.scenarioId) }}</h1>
    <template v-if="!loading && scenario">
      <ScenarioEditor
        v-model="scenario"
        @save="save()"
        ref="editor"
      />
    </template>
    <ScenarioEditorSkeleton v-else></ScenarioEditorSkeleton>
  </div>
</template>

<script>
import Scenario from '@/services/Scenario'
import Ui from '@/services/Ui'
import ScenarioEditor from '@/components/Scenario/ScenarioEditor'
import ScenarioEditorSkeleton from '@/components/Scenario/ScenarioEditorSkeleton'

export default {
  data: () => ({
    scenario: null,
    saving: false
  }),
  computed: {
    loading() {
      return !this.$store.state.scenario.scenariosAreLoaded
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$store.dispatch('scenario/lazyLoadScenarios', this.$route.params.collectionId)
      this.scenario = this.$store.state.scenario.scenarios.filter(sc => sc.id === this.$route.params.scenarioId)[0]
    },
    makeScenarioReadable(id) {
      return Scenario.buildReadableNameFromId(id)
    },
    async save() {
      try {
        await this.$store.dispatch('scenario/updateScenario', {
          collectionId: this.$route.params.collectionId,
          scenario: this.scenario
        })
        Ui.reportSuccess('Scenario saved')
      } catch (error) {
        Ui.reportError('Could not save Scenario!', error)
      }
      this.$refs.editor.stopSaving()
    }
  },
  components: {
    ScenarioEditor,
    ScenarioEditorSkeleton
  }
}
</script>

<style scoped>

</style>