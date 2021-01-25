<template>
  <b-menu>
    <b-navbar-item tag="router-link" :to="{path: '/'}">
      <div class="logo">Fantestic</div>
    </b-navbar-item>
    <b-menu-list>
      <b-menu-item tag="router-link" :to="{ path: '/' }" label="Dashboard"></b-menu-item>
      <b-menu-item tag="router-link" :to="{ name: 'CollectionList' }" label="Manage Tests"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>


<style scoped>
  .logo {
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    color: #7957d5;
    font-weight: 700;
  }
</style>