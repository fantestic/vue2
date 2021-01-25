<template>
  <div>
    <EditorLine>
      <b-skeleton></b-skeleton>
    </EditorLine>
    <EditorLine>
      <b-skeleton></b-skeleton>
    </EditorLine>
    <EditorLine>
      <b-skeleton></b-skeleton>
    </EditorLine>
    <div class="form-actions">
      <b-skeleton size="is-large" width="100px" height="40px"></b-skeleton>
      <b-skeleton size="is-large" width="100px" height="40px"></b-skeleton>
  </div>
  </div>
</template>

<script>

import EditorLine from './ScenarioEditor/EditorLine'
export default {
  components: {
    EditorLine
  }
}
</script>

<style lang="scss" scoped>
  .form-actions {
    display: flex;
    .b-skeleton {
      margin: 0 10px 0 0;
      width: 100px;
    }
  }
</style>