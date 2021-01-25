<template>
  <div id="app">
    <div class="columns">
      <div class="column is-narrow">
        <TheMenu></TheMenu>
      </div>
      <div class="column">
        <TheNavbar />
        <TheBreadcrumbs />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheBreadcrumbs from '@/components/TheBreadcrumbs'
import TheMenu from '@/components/TheMenu'

export default {
  components: {
    TheNavbar,
    TheBreadcrumbs,
    TheMenu
  }
}
</script>

<style>
</style>
