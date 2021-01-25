<template>
  <div class="container">
    <div v-if="!loading">
      <div class="is-flex is-justify-content-space-between">
        <h1 class="title">{{ makeCollectionReadable($route.params.collectionId) }}</h1>
        <b-button
          type="is-primary"
          icon-left="plus-circle"
          size="is-small"
          tag="router-link"
          :to="{ name: 'ScenarioCreate' }"
        >Create</b-button>
      </div>
      <b-table
        :data="scenarios"
      >
        <b-table-column
          label="Scenario"
          v-slot="props"
          :searchable="true"
        >
          <router-link
            :to="{ name: 'ScenarioEdit', params: {scenarioId: props.row.id }}"
          >{{ makeScenarioReadable(props.row.id) }}</router-link>
        </b-table-column>
        <b-table-column
          label="Actions"
          v-slot="props"
        >
          <b-tooltip label="Run all Scenario">
            <b-button
              size="is-small"
              icon-right="flash"
              @click="runScenario(props.row.id)"
            ></b-button>
          </b-tooltip>
        </b-table-column>
      </b-table>
    </div>
    <b-loading v-model="loading"></b-loading>
  </div>
</template>

<script>
import Collection from '@/services/Collection'
import Scenario from '@/services/Scenario'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  mounted() {
    if (this.$route.params.collectionId !== this.activeCollection) {
      this['scenario/setScenariosAreLoaded'](false)
      this['scenario/loadScenarios'](this.$route.params.collectionId)
    }
  },
  methods: {
    ...mapActions([
      'scenario/loadScenarios',
    ]),
    ...mapMutations([
      'scenario/setScenariosAreLoaded',
    ]),
    makeCollectionReadable(id) {
      return Collection.buildReadableNameFromId(id)
    },
    makeScenarioReadable(id) {
      return Scenario.buildReadableNameFromId(id)
    },
    runScenario(id) {
      console.log(id + ' to open')
      alert('We cant do that yet :(')
    }
  },
  computed: {
    ...mapState({
      activeCollection: state => state.scenario.activeCollection,
      scenariosAreLoaded: state => state.scenario.scenariosAreLoaded,
      scenarios: state => state.scenario.scenarios
    }),
    loading() {
      return !this.scenariosAreLoaded
    }
  }
}
</script>