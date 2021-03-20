<template>
  <div class="action">
            <!--v-model="step.parameters[phrase]['value']"-->
    <template v-if="!loading">
      <div
        v-for="(phrase, index) in phrases"
        :key="index"
      >
        <div v-if="phraseIsParam(phrase)" class="phrase phrase-param">

          <input
            class="param"
            ref="parameters"
            @input="emitInput()"
            v-model="step.arguments[getArgumentIndexForPhrase(phrase)]['value']"
          >
        </div>
        <div v-else class="phrase">{{ phrase }}</div>
      </div>
        <b-button
          icon-right="close"
          size="is-small"
          class="button-delete"
          @click="emitDelete()"
          tabindex="-1"
        ></b-button>
    </template>
    <b-skeleton :active="loading"></b-skeleton>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Object
    }
  },
  data: () => ({
    step: null,
    action: null
  }),
  beforeMount() {
    this.init()
  },
  computed: {
    phrases() {
      if (this.action) {
        const re = /(\$[a-zA-Z_]*)/
        return this.action.readable.split(re)
      } else {
        return []
      }
    },
    loading() {
      return (!this.$store.state.action.actionsAreLoaded)
    }
  },
  methods: {
    async init() {
      this.step = this.value
      await this.$store.dispatch('action/lazyLoadActions')
      // @todo ensure fallback for unknown actions (entire step should be disabled)
      this.action = this.$store.state.action.actions.filter(ac => ac.id === this.value.action.id)[0]
    },
    phraseIsParam(phrase) {
      return phrase.trim().match(/\$[a-zA-Z_]*/);
    },
    focus() {
      // Might look like a dirty hack, but the elements might not be available
      // for multiple ticks as we are waiting for the network
      if (this.loading) {
        window.setTimeout(function () {
          this.focus()
        }.bind(this), 100)
      } else {
        if (typeof this.$refs.parameters[0] !== 'undefined') {
          this.$refs.parameters[0].focus()
        }
      }
    },
    getArgumentIndexForPhrase(phrase) {
      return this.action.parameters.filter(param => param.name === phrase)[0]['position']
    },
    emitInput() {
      this.$emit('input', this.step)
    },
    emitDelete() {
      this.$emit('delete', this.step)
    }
  }
}
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  flex-direction: row;
}
.param {
  border: 0;
  border-bottom: 1px solid $dark;
  font-size: $scenarioEditorLineFontSize;
}
.param:focus {
  outline: none;
  border-bottom: 2px solid $primary;
}
.phrase-param {
  padding-left: 5px;
}
.button-delete {
  position: absolute;
  right: 5px;
}
</style>