<template>
  <b-autocomplete
        placeholder="...start typing to add an action"
        :data="filteredActions"
        v-model="newLineSearchValue"
        :open-on-focus="true"
        @select="$emit('select', $event)"
        :clear-on-select="true"
        :keep-first="true"
        ref="autocomplete"
      >
        <template slot-scope="props">
          {{ props.option.readable }}
        </template>
      </b-autocomplete>
</template>

<script>
export default {
  props: {
    focusOnMount: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$store.dispatch('action/lazyLoadActions')
  },
  mounted() {
    if (this.focusOnMount) {
      this.focus();
    }
  },
  data: () => ({
    newLineSearchValue: '',
    selected: null
  }),
  computed: {
    filteredActions() {
      return (this.$store.state.action.actions.filter(option => {
        return option.readable.toLowerCase().includes(this.newLineSearchValue.toLowerCase())
      }))
    }
  },
  methods: {
    focus () {
      this.$refs.autocomplete.focus()
    },
    selectAction (action) {
      this.$emit('select', action)
    }
  }
}
</script>