<template>
  <div class="container">
    <div class="is-flex is-justify-content-space-between">
      <h1 class="title">Collections</h1>
      <b-button
          type="is-primary"
          icon-left="plus-circle"
          size="is-small"
          tag="router-link"
          :to="{ name: 'CollectionCreate' }"
        >Create</b-button>
    </div>
    <b-table :data="collections">
      <b-table-column
        field="readable"
        label="Collection"
        v-slot="props"
        :searchable="true"
      >
        <router-link
          :to="{name: 'CollectionView', params: {collectionId: props.row.id}}"
        >{{ makeReadable(props.row.id) }}</router-link>
      </b-table-column>
      <b-table-column
        label="Actions"
        v-slot="props"
      >
        <b-tooltip label="Run all Scenarios in this Collection">
          <b-button
            size="is-small"
            icon-right="flash"
            @click="runScenarios(props.row.id)"
          ></b-button>
        </b-tooltip>
        <b-tooltip label="Delete this Collection">
          <b-button
            size="is-small"
            icon-right="delete"
            type="is-danger"
            @click="removeCollection(props.row.id)"
          ></b-button>
        </b-tooltip>
      </b-table-column>
    </b-table>
    <b-loading
      v-model="loading"
      :is-full-page="false"
    ></b-loading>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import Collection from '@/services/Collection'
import _ from 'lodash'
import Ui from '@/services/Ui'

export default {
  data() {
    return {
      columns: [
        {
          field: 'readable',
          label: 'Name',
          searchable: true
        },
        {
          field: 'numberOfScenarios',
          label: 'Number of Scenarios'
        }
      ]
    }
  },
  created() {
    this.$store.dispatch('collection/lazyLoadCollections')
  },
  computed: {
    ...mapState({
      collections: state => state.collection.collections
    }),
    loading() {
      return !this.$store.state.collection.collectionsAreLoaded
    }
  },
  methods: {
    makeReadable(id) {
      return Collection.buildReadableNameFromId(id)
    },
    runScenarios(id) {
      console.log(id + ' to open')
      alert('We cant do that yet :(')
    },
    removeCollection(id) {
      this.$buefy.dialog.confirm({
          title: 'Deleting Collection',
          message: 'Are you sure you want to <b>delete</b> ' + _.escape(id) + '? This action cannot be undone.',
          confirmText: 'Delete Collection',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            this.$store.dispatch('collection/removeCollection', id)
            .then(() => {
              Ui.reportSuccess('Collection has been removed.')
            })
          }
      })
    }
  }
}
</script>