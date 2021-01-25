<template>
  <div id="app">
    <TheNavbar />
    <TheBreadcrumbs />
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheBreadcrumbs from '@/components/TheBreadcrumbs'

export default {
  components: {
    TheNavbar,
    TheBreadcrumbs
  }
}
</script>

<style>
</style>
