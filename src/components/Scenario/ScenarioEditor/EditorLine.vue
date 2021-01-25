<template>
  <div class="scenario-editor-line">
    <div class="insert-before" @click="$emit('insert-before')"></div>
    <slot ref="slot"></slot>
  </div>
</template>


<script>
export default {
  methods: {
  }
}
</script>


<style lang="scss" scoped>
.scenario-editor-line {
  position: relative;
  padding: 1rem 0;
  font-size: $scenarioEditorLineFontSize;
}
.insert-before {
  position: absolute;
  height: 10px;
  top: -5px;
  width: 100%;
  transition: all 500ms;
  cursor: pointer;
  border-radius: 2px;
}
.insert-before::before {
  content: '';
  display: block;
  height: 1px;
  background: $light;
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -1px;
}
.insert-before:hover, .insert-before:hover::before {
  background: $primary;
}

</style>