<template>
  <div class="action">
    <template v-if="!loading">
      <div
        v-for="(phrase, index) in phrases"
        :key="index"
      >
        <div v-if="phraseIsParam(phrase)" class="phrase phrase-param">
          <input class="param" ref="params" @input="emitInput()" v-model="step.params[phrase]['value']">
        </div>
        <div v-else class="phrase">{{ phrase }}</div>
      </div>
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
      this.action = this.$store.state.action.actions.filter(ac => ac.id === this.value.action)[0]
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
        this.$refs.params[0].focus()
      }
    },
    emitInput() {
      this.$emit('input', this.step)
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
</style>