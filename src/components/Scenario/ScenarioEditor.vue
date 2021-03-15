<template>
  <div>
    <b-modal v-model="showAddStepModal">
      <AddStepModal @select-action="onSelectAddStepBefore($event)"></AddStepModal>
    </b-modal>
    
    <EditorLine
      v-for="(line, index) in scenario.steps"
      :key="line.uid"
      @insert-before="insertBefore(index)"
    >
      <EditorStep
        v-model="scenario.steps[index]"
        ref="steps"
      ></EditorStep>
    </EditorLine>
    <EditorLine>
      <ActionSelector
        @select="addStep($event)"
        :focus-on-mount="false"
      ></ActionSelector>
    </EditorLine>
    <div class="form-actions">
      <b-button
        type="is-secondary"
        icon-left="flash"
        size="is-medium"
        @click="runScenario()"
      >Run</b-button>
      <b-button
        type="is-primary"
        icon-left="content-save"
        size="is-medium"
        @click="save()"
        :loading="saving"
        :disabled="saving"
      >Save</b-button>
    </div>
  </div>
</template>

<script>
import EditorLine from './ScenarioEditor/EditorLine'
import EditorStep from './ScenarioEditor/EditorStep'
import ActionSelector from './ScenarioEditor/ActionSelector'
import AddStepModal from './ScenarioEditor/AddStepModal'
import _ from 'lodash'

export default {
  props: {
    value: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    scenario: null,
    saving: false,
    showAddStepModal: false,
    addStepPosition: null
  }),
  beforeMount() {
    this.scenario = _.clone(this.value)
    for (const i in this.scenario.steps) {
      let step = this.scenario.steps[i]
      step.uid = _.uniqueId()
      this.$set(this.scenario.steps, i, step)
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    insertBefore(position) {
      this.showAddStepModal = true
      this.addStepPosition = position
    },
    onSelectAddStepBefore(action) {
      this.addStep(action, this.addStepPosition)
      this.showAddStepModal = false
    },
    runScenario() {
      alert('We cant run dem scenarios yet!')
    },
    stopSaving() {
      this.saving = false
    },
    addStep(action, position = null) {
      const step = {}
      
      step.action = action
      step.uid = _.uniqueId()
      step.arguments = {}
      let i = 0
      action.parameters.forEach(param => {
        step.arguments[i++] = {
          param: param,
          dataSource: 'text',
          value: ''
        }
      });
      if (position === null) {
        position = Object.keys(this.scenario.steps).length
      }
      // shift all items > position one position
      for (let i = Object.keys(this.scenario.steps).length -1; i >= position; i--) {
        this.$set(this.scenario.steps, i+1, this.scenario.steps[i])
      }
      this.$set(this.scenario.steps, position, step)
      this.emitInput()
      this.$nextTick(function() {
        this.$refs.steps[this.$refs.steps.length-1].focus()
      })
    },
    onKeydown(e) {
      if (!(e.keyCode === 83 && (e.ctrlKey || e.metaKey))) {
        return
      }
      e.preventDefault()
      this.save()
    },
    save() {
      this.emitInput()
      // @todo validate before emitting
      // double-check that all changes are emitted to parent
      this.saving = true
      this.$emit('save')
    },
    emitInput() {
      this.$emit('input', _.clone(this.scenario))
    }
  },
  components: {
    EditorLine,
    EditorStep,
    ActionSelector,
    AddStepModal
  }
}
</script>

<style lang="scss" scoped>
  .form-actions {
    display: flex;
    button {
      margin: 0 10px 0 0;
    }
  }
</style>