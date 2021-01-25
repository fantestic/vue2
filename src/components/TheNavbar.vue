<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{path: '/'}">
        <div class="logo">Fantestic</div>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Dashboard</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'CollectionList' }">Manage Tests</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .logo {
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    color: #7957d5;
    font-weight: 700;
  }
</style>