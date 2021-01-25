<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Step</p>
      </header>
      <section class="modal-card-body">
        <ActionSelector
          @select="selectAction($event)"
          :focus-on-mount="true"
        ></ActionSelector>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </section>
    </div>
</template>

<script>
import ActionSelector from './ActionSelector'

export default {
  props: {

  },
  components: {
    ActionSelector
  },
  methods: {
    selectAction($event) {
      this.$emit('select-action', $event)
    }
  }
}
</script>